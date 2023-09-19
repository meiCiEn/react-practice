// Screen.js - top section of Wrapper component, will display the calculated values.

import styles from "./Screen.module.css";

const Screen = ({ value }) => {
  return (
    <div className={styles.screen} mode="single" max={70}>
      <p>{value}</p>
    </div>
  );
};

export default Screen;