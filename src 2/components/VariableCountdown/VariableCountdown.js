import React, { useState, useEffect } from "react";
import CountdownSelector from './CountdownSelector/CountdownSelector';
import CountdownTimer from './CountdownTimer/CountdownTimer';
import H2 from '../Common/H2';

const VariableCountdown = ( { onTimerZero } ) =>
{
  const [ initialTime, setInitialTime ] = useState( 0 );
  const [ formSubmitted, setFormSubmitted ] = useState( false );
  const [ timerActive, setTimerActive ] = useState( false );

  // Function to handle when the timer reaches zero
  const handleTimerZero = () =>
  {
    // console.log( `HandleTimerZero activated` );
    setTimerActive( false );
    setFormSubmitted( false ); // Reset the formSubmitted state
    setInitialTime( 0 ); // Reset initialTime
    onTimerZero(); // Notify the parent component
    

  };

  useEffect( () =>
  {
    // Check if the form has been submitted
    if ( formSubmitted )
    {
      setTimerActive( true );
      console.log( `formSubmitted: ${ formSubmitted }` );
      // console.log( `timerActive: ${ timerActive }` );
      // console.log( `showPopup: ${ showPopup }` );
    }
  }, [ formSubmitted ] );

 
  return (
    <div>
      <H2>Countdown Timer</H2>
      { timerActive ? (
        // Render Countdown component when the timer is active
<>
        <CountdownTimer
          initialTime={initialTime}
          onCancel={() => {
            setTimerActive(false);
            setFormSubmitted(false); // Reset formSubmitted if canceled
          }}
          onZero={handleTimerZero}
        />

        </>
      ) : (
        // Render CountdownSelector when the timer is not active
        <CountdownSelector
          setFormSubmitted={ setFormSubmitted }
          setInitialTime={ setInitialTime }
        />
        
      ) }
    </div>
  );
};

export default VariableCountdown;
