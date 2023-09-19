import React, { useState, useEffect } from 'react';

// Countdown from 30 seconds
const CountdownSimple = () =>
{
    // State to store time
    const [ time, setTime ] = useState( 500 );
    const [ isRunning, setIsRunning ] = useState( false );
    const [resetDisabled, setResetDisabled] = useState(false);

    // useEffect to start timer when isRunning is true 
    useEffect( () =>
    {
        let intervalId; // identifier returned by setInterval

        // if timer is running and time is more than 0, decrement by 1 every 10 milliseconds.
        // Else if timer is running and time is 0 or less, stop running the timer and reset it. 
        if ( isRunning && ( time > 0 ) )
        {
            intervalId = setInterval( () => setTime( time - 1 )
                , 10 );
        } else if ( isRunning && ( time <= 0 ) )
        {
            setIsRunning( !isRunning );
            setResetDisabled(false); // Enable the reset button
            reset();
        }

        return () =>
        /* clearInterval stops the event of the recurring calling of a function  
        at a fixed delay set by the setInterval() function. */
{
            clearInterval( intervalId );
        };
    }, [ isRunning, time ] );

    // Calculate hours, minutes, seconds and milliseconds
    const hours = Math.floor( time / 360000 );
    const minutes = Math.floor( ( time % 360000 ) / 6000 );
    const seconds = Math.floor( ( time % 6000 ) / 100 );
    const milliseconds = Math.floor( time % 100 );
    
    // function to start and stop timer
    const startStopTimer = () => {
        setIsRunning(!isRunning);
        setResetDisabled(true); // Disable the reset button when starting the timer
      };

    // function to reset timer
    const reset = () => {
        if (!isRunning) {
            setTime(500);
          setResetDisabled(false); // Enable the reset button after resetting
        }
      };

    return (
        <>
            <div>{ hours.toString().padStart( 2, "0" ) }:{ minutes.toString().padStart( 2, "0" ) }:{ seconds.toString().padStart( 2, "0" ) }:{ milliseconds.toString().padStart( 2, "0" ) }</div>
            <div className="buttons">
                <button onClick={startStopTimer}>{isRunning ? "stop" : "start"}</button>
                <button onClick={reset} disabled={isRunning}>Reset</button>
            </div>
        </>
    );
};

export default CountdownSimple;

