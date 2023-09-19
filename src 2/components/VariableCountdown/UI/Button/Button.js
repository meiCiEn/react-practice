import React from 'react';
import styles from './Button.module.css';


const Button = (props) => {
  const { color, reduceOpacity, onClick, children, disabled } = props;
  // define class for basic button style
  const baseStyle = `${styles.button}`;

  // define class for colour variants
  const colorStyles = {
    red: `${styles.buttonRed}`,
    amber: `${styles.buttonAmber}`,
    green: `${styles.buttonGreen}`,
    indigo: `${styles.buttonIndigo}`
  };

  // determine class based on "color" prop
  const buttonClassName = `${baseStyle} ${colorStyles[color] || ''} ${
    reduceOpacity ? `${styles.opacity50}` : ''
  }`;

  return (
    <button
      className={buttonClassName}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
