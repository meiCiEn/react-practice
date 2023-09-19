import './MemoryGame.css';
import H2 from '../Common/H2';
import { useState, useEffect } from 'react';
import SingleCard from './components/SingleCard';
import { log } from 'debug/src/browser';

// Each card in array is an object
const cardImages = [
    { "src": "./img/cards/cat.svg", matched: false },
    { "src": "./img/cards/fox.svg", matched: false },
    { "src": "./img/cards/kangaroo.svg", matched: false },
    { "src": "./img/cards/octopus.svg", matched: false },
    { "src": "./img/cards/penguin.svg", matched: false },
    { "src": "./img/cards/rabbit.svg", matched: false },
];

const MemoryGame = () =>
{

    const [ cards, setCards ] = useState( [] ); // initialise empty array to store shuffled cards in
    const [ turns, setTurns ] = useState( 0 ); // set a state for the number of turns taken
    const [ choiceOne, setChoiceOne ] = useState( null ); // initialised to null but updated to the first card selected
    const [ choiceTwo, setChoiceTwo ] = useState( null ); // initialised to null but updated to the second card selected
    const [disabled, setDisabled] = useState(false);

    // shuffle cards (function called every time we start a new game)
    const shuffleCards = () =>
    {
        // 1. duplicate cards: spread syntax to place old cards in new array, twice.
        // 2. sort cards: random number between 0 and 1, minus 0.5.
        // This will sometimes produce a negative number, sometimes positive
        // When negative result, card order stays the same
        // When positive, switches order around
        // result is a shuffled array
        // 3. add an ID to each array item using map method, and return an object

        const shuffledCards = [ ...cardImages, ...cardImages ]
            .sort( () => Math.random() - 0.5 )
            .map( ( card ) => ( { ...card, id: Math.random() } ) ); // spread existing properties of each card, add id property

        // update cards state using shuffleCards function, to be those shuffled cards
        setChoiceOne(null);
        setChoiceTwo(null);
        setCards( shuffledCards );
        setTurns( 0 );
    };

    // handle a choice 
    const handleChoice = ( card ) =>
    {
        // if choiceOne has a value (i.e. is NOT null), setChoiceTwo
        // if choiceOne does not have a value (i.e. is null), setChoiceOne
        choiceOne ? setChoiceTwo( card ) : setChoiceOne( card );
        // NOT HERE - state updates are scheduled so if you evaluate your cards here, the evaluation will happen BEFORE the state change has happened. 
    };

    // Compare the two selected cards
    // useEffect fires when the component first mounts, then whenever a dependency changes
    useEffect(() => {
        
        // Check if both choices are made
        if (choiceOne !== null && choiceTwo !== null) {
            // disable cards while we are checking whether they match
            setDisabled(true); 
            // If so, compare the selected cards
            // If choiceOne.src is equal to choiceTwo.src, we have a match and update the card state. 
            if (choiceOne.src === choiceTwo.src) {
                // return a new array of cards
                setCards(prevCards => {
                    return prevCards.map(card => {
                        if (card.src === choiceOne.src) {
                            return {...card, matched: true}
                        } else {
                            return card
                        }
                    })
                })
                resetTurn(); // Reset the choices and increase the turn count
            } else {
                // wait one second before flipping non-matching cards back over
                setTimeout(() => resetTurn(), 1000)
            }
            
            
        }
    }, [choiceOne, choiceTwo]); // dependency array

console.log(cards);

    // reset choices and increase turn
    const resetTurn = () => {
      setChoiceOne(null);
      setChoiceTwo(null);
      // use a function to update the state based on the previous state
      setTurns(prevTurns => prevTurns + 1);
      // un-disable cards on new turn
      setDisabled(false);
    }

    // start a new game automatically
    useEffect(() => {
        shuffleCards()
    }, [])

    return (
        <div className='memoryWrapper'>
            <div className='memoryGame'>
                <H2>Magic Match</H2>
                <button onClick={ shuffleCards } className="memoryButton">New Game</button>

                <div className="card-grid">
                    {/* map through card array and for each card produce a template */ }
                    { cards.map( card => (
                        <SingleCard
                            key={ card.id }
                            card={ card }
                            // pass handleChoice function in to card as a prop
                            handleChoice={ handleChoice }
                            // card flipped over if it's user's choiceOne or choiceTwo, or if it's already been matched. 
                            flipped={card === choiceOne || card===choiceTwo || card.matched} 
                            disabled={disabled} 
                            />
                    ) ) }

                </div>
                <div className="pt-4">
                    <p>Turns: {turns}</p>
                </div>
                

            </div>


        </div>
    );
};

export default MemoryGame;


