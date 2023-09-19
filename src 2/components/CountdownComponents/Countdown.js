import React, { useState, useEffect } from 'react';
import styles from "./CountdownComponents.module.css";
import Wrapper from './Wrapper/Wrapper';
import ButtonBox from './ButtonBox/ButtonBox';
import H2 from '../Common/H2';
import Timer from './Timer/Timer';
import Button from './Button/Button';

// Countdown from 5 seconds
const Countdown = () =>
{
    // State to store time
    const [ time, setTime ] = useState( 500 );
    const [ isRunning, setIsRunning ] = useState( false );
    const [ resetDisabled, setResetDisabled ] = useState( false );

    // useEffect to start timer when isRunning is true 
    useEffect( () =>
    {
        let intervalId;

        if ( isRunning && time > 0 )
        {
            intervalId = setInterval( () => setTime( time - 1 ), 10 );
        } else if ( isRunning && time <= 0 )
        {
            setIsRunning( false );
            setResetDisabled( false ); // Enable the reset button
            reset();
        }

        return () =>
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
            setResetDisabled( false ); // Enable the reset button after resetting
            setTime( 500 );
        }
    };

    return (
        <>
            <H2>Countdown</H2>

            <p>This countdown timer is set at 5 seconds.</p>
            <div className={styles.spacer}></div>
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

export default Countdown;

