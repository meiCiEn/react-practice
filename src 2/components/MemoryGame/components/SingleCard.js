import React from 'react';
import "./SingleCard.css";

const SingleCard = ( { card, handleChoice, flipped, disabled } ) =>
{

    const handleClick = () =>
    {
        // only when card is not disabled will handleChoice fire (to update the choice state)
        if(!disabled) {
            handleChoice( card );
        }
    };
    return (
        <div className="card">
            <div className={ flipped ? "flipped" : "" }>
                <img className="front" src={ card.src } alt="card front" />
                <img className="back"
                    src="./img/cards/card-back.svg"
                    onClick={ handleClick }
                    alt="card back" />
            </div>
        </div>
    );
};

export default SingleCard;