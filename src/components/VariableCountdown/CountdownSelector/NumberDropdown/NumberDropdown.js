import React, { useState } from 'react';
import styles from "./NumberDropdown.module.css";

const NumberDropdown = ({ min, max, singularUnit, unit, onSelect }) => {
  const numbers = Array.from({ length: max - min + 1 }, (_, index) => min + index);

  const [selectedNumber, setSelectedNumber] = useState('');

  const handleSelectChange = (event) => {
    const newValue = event.target.value;
    setSelectedNumber( newValue );
    onSelect( newValue ); // Call the onSelect prop to update the parent component's state

  };

  return (
    <div className={styles.numberSelectBox}>
      <select id="numberSelect" 
      onChange={handleSelectChange} 
      value={selectedNumber}
      className={styles.numberSelect}>
        {numbers.map((number) => (
          <option key={number} value={number}>
            {number}
          </option>
        ))}
      </select>
      <label 
      htmlFor="numberSelect"
      className={styles.label}
      >{singularUnit && selectedNumber === '1' ? singularUnit : unit}</label>
      
    </div>
  );
};

export default NumberDropdown;



