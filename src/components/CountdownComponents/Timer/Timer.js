import React from 'react';
import styles from './Timer.module.css';

const Timer = ( props ) =>
{
    const { hours, minutes, seconds, milliseconds } = props;
    return (
        <div className={ styles.timerBox }>
            <div className={ styles.timer }>
                <div className={ styles.number }>
                    { hours.toString().padStart( 2, "0" ) }
                </div>
                <div className={ styles.colon }>:</div>
                <div className={ styles.number }>
                    { minutes.toString().padStart( 2, "0" ) }
                </div>
                <div className={ styles.colon }>:</div>
                <div className={ styles.number }>
                    { seconds.toString().padStart( 2, "0" ) }
                </div>
                <div className={ styles.colon }>:</div>
                <div className={ styles.number }>
                    { milliseconds.toString().padStart( 2, "0" ) }
                </div>
            </div>
        </div>
    );
};

export default Timer;