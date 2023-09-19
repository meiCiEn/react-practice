import React, { useState, useEffect } from "react";
import Wrapper from '../UI/Wrapper/Wrapper';
import ButtonBox from '../UI/ButtonBox/ButtonBox';
import Timer from '../UI/Timer/Timer';
import Button from '../UI/Button/Button';
import Popup from '../UI/Popup/Popup';


// const CountdownTimer = ( { initialTime, onCancel, timerActive, setTimerActive, onZero } ) =>
const CountdownTimer = ( { initialTime, onCancel } ) =>
{
  // State to store time
  const [ time, setTime ] = useState( initialTime );



  // Listen for changes in the initialTime prop
  useEffect( () =>
  {
    // Update the time state when initialTime changes
    setTime( initialTime );

  }, [ initialTime ] ); // Add initialTime to the dependency array

  const [ isRunning, setIsRunning ] = useState( true );
  const [ resetDisabled, setResetDisabled ] = useState( false );
  const [ timerRunning, setTimerRunning ] = useState( true );
  const [showPopup, setShowPopup] = useState(false); 
  // useEffect to start timer when isRunning is true 
  useEffect( () =>
  {
    let intervalId; // identifier returned by setInterval
    // if timer is running and time is more than 0, decrement by 1 every 10 milliseconds.
    // Else if timer is running and time is 0 or less, stop running the timer and reset it. 
    if ( isRunning && ( time > 0 ) )
    {
      intervalId = setInterval( () => setTime( time - 100 )
        , 1000 );
      // setTimerActive(true);
      // console.log(`timerActive: ${timerActive}`)

    } else if ( isRunning && ( time <= 0 ) )
    {
      setIsRunning( !isRunning );
      setResetDisabled( false ); // Enable the reset button
      setShowPopup(true);
      reset();
    }
    return () =>
    /* clearInterval stops the event of the recurring calling of a function  
    at a fixed delay set by the setInterval() function. */
{
      clearInterval( intervalId );
    };
  }, [ isRunning, time ] );

  useEffect( () =>
  {
    if ( isRunning )
    {
      setTimerRunning( false );
    }
    console.log( `timerRunning?: ${ timerRunning }` );
    console.log( `showPopup?: ${ showPopup }` );
  }, [ isRunning ] );



  // Calculate hours, minutes, seconds and milliseconds
  const hours = Math.floor( time / 360000 );
  const minutes = Math.floor( ( time % 360000 ) / 6000 );
  const seconds = Math.floor( ( time % 6000 ) / 100 );
  const milliseconds = Math.floor( time % 100 );

  // function to start and stop timer
  const startStopTimer = () =>
  {
    setIsRunning( !isRunning );
    setResetDisabled( true ); // Disable the reset button when starting the timer
  };


  // function to reset timer
  const reset = () =>
  {
    if ( !isRunning )
    {
      setTime( 0 );
      setResetDisabled( false ); // Enable the reset button after resetting
    }
  };

  // function to cancel timer
  const cancel = () =>
  {
    if ( isRunning )
    {
      setIsRunning( false );
    }

    // Call the onCancel callback
    onCancel();
  };

  // Function to handle canceling the timer
  const cancelTimer = () =>
  {
    setIsRunning( false );
    // Call the onCancel function if it's provided
    if ( onCancel )
    {
      onCancel();
    }
  };


  return (
    <div className="relative">
          {showPopup && (
            <Popup
              onClose={() => setShowPopup(false)} // Close the popup
            />
          )}
      <Wrapper>

        <Timer hours={ hours } minutes={ minutes } seconds={ seconds } milliseconds={ milliseconds } />
        <ButtonBox>
          <Button color={ isRunning ? 'red' : 'green' }
            onClick={ startStopTimer }
            disabled={time <= 0}
            reduceOpacity={ time <= 0}
          >
            { isRunning ? 'Stop' : 'Start' }
          </Button>
          <Button
            color="amber"
            reduceOpacity={ isRunning }
            onClick={ cancelTimer }
            disabled={ isRunning }
          >
            Reset
          </Button>

        </ButtonBox>
      </Wrapper>

    </div>
  );
};

export default CountdownTimer;