import { useState, useEffect } from 'react';
import styles from "./CountdownSelector.module.css";
import NumberDropdown from './NumberDropdown/NumberDropdown';
import StretchyButton from '../UI/StretchyButton/StretchyButton';
import Wrapper from '../UI/Wrapper/Wrapper';


const CountdownSelector = ( { setInitialTime, setFormSubmitted, initialTime } ) =>
{
  const [ selectedHours, setSelectedHours ] = useState( 0 );
  const [ selectedMinutes, setSelectedMinutes ] = useState( 0 );
  const [ selectedSeconds, setSelectedSeconds ] = useState( 0 );

  // Function to check if any value is non-zero
  const anyValueNonZero = () =>
  {
    return selectedHours !== 0 || selectedMinutes !== 0 || selectedSeconds !== 0;
  };

  const handleSubmit = () =>
  {
    const newInitialTime =
      Number( selectedHours ) * 3600 * 100 +
      Number( selectedMinutes ) * 60 * 100 +
      Number( selectedSeconds ) * 100;

    setInitialTime( newInitialTime ); // Update initialTime

    // Set the submitted state to true to trigger rendering of Countdown
    setFormSubmitted( true );
    if ( newInitialTime !== 0 )
    {
      console.log( `Initial Time is more than 0` );
    }
    console.log( `Initial Time: ${ newInitialTime } milliseconds` );
  };

  return (
    <Wrapper>
    <div className={styles.wrapper}>

      <div className={styles.dropdownBox}>
        {/* NumberDropdown components for selecting hours, minutes, and seconds */}
        <NumberDropdown
          min={0}
          max={23}
          unit="hours"
          singularUnit="hour" // Use singular unit for when user selects 1 hour, 1 minute etc. 
          onSelect={setSelectedHours}
        />
        <NumberDropdown
          min={0}
          max={59}
          unit="minutes"
          singularUnit="minute"
          onSelect={setSelectedMinutes}
        />
        <NumberDropdown
          min={0}
          max={59}
          unit="seconds"
          singularUnit="second"
          onSelect={setSelectedSeconds}
        />
      </div>

      <StretchyButton
      id="btnSubmit"
      onClick={ handleSubmit }
      disabled={ !anyValueNonZero() }
      reduceOpacity={ !anyValueNonZero() }
      color="indigo"
      >Start Timer</StretchyButton>
    </div>
    </Wrapper>
  );
};

export default CountdownSelector;
