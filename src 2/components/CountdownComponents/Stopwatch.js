// TODO 1. Countdown timer from 10 seconds
// TODO 2. Countdown timer where user can select start time

import React, { useState, useEffect } from "react";
import Heading2 from '../Common/H2';
import Wrapper from './Wrapper/Wrapper';
import ButtonBox from './ButtonBox/ButtonBox';
import Timer from './Timer/Timer';
import Button from './Button/Button';

const Stopwatch = () =>
{
    // State to store time
    const [ time, setTime ] = useState( 0 );

    // State to check whether stopwatch is running or not
    const [ isRunning, setIsRunning ] = useState( false );

    // UseEffect to start the timer when isRunning becomes true
    // It sets up an interval when isRunning becomes true and clears it when the component unmounts. 
    useEffect( () =>
    {

        let intervalId; // identifier returned by setInterval - a built-in JavaScript function that allows you to repeatedly execute a given function at a specified time interval.
        if ( isRunning )
        {
            // if isRunning is true, increment time state variable by 1 every 10 milliseconds
            intervalId = setInterval( () => setTime( time + 1 ), 10 );
        }
        // Cleanup the timer when the component unmounts, i.e. if the isRunning or time state changes
        return () => clearInterval( intervalId );
    }, [ isRunning, time ] );

    // Calculate hours

    // time represents total time in milliseconds; 
    // 360000 = number of milliseconds in one hour
    // Math.floor(...) rounds down the result to the nearest integer, giving a whole number of hours
    const hours = Math.floor( time / 360000 );

    // Calculate minutes

    // (time % 360000) gives the remainder when time is divided by 360000, removing the hours component from the time value
    // the remainder (in milliseconds) is divided by 6000, giving the minutes
    // Math.floor(...) rounds down the result to the nearest integer, giving a whole number of minutes
    const minutes = Math.floor( ( time % 360000 ) / 6000 );

    // Calculate seconds
    const seconds = Math.floor( ( time % 6000 ) / 100 );

    // Calculate milliseconds
    const milliseconds = time % 100;

    // Method to start and stop timer
    const startStopTimer = () =>
    {
        setIsRunning( !isRunning );
    };

    // Method to reset timer to 0
    const reset = () =>
    {
        setTime( 0 );
    };
    return (
        <>
            <Heading2>Stopwatch</Heading2>
            <Wrapper>
                <Timer hours={ hours } minutes={ minutes } seconds={ seconds } milliseconds={ milliseconds } />
                <ButtonBox>
                    <Button color={ isRunning ? 'red' : 'green' }
                        onClick={ startStopTimer }
                    >
                        { isRunning ? 'Stop' : 'Start' }
                    </Button>
                    <Button
                        color="amber"
                        reduceOpacity={ isRunning }
                        onClick={ reset }
                        disabled={ isRunning }
                    >
                        Reset
                    </Button>
                </ButtonBox>
            </Wrapper>

        </>
    );
};

export default Stopwatch;

