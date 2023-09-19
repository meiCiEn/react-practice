// Wrapper.js - this will hold all the child components in place
import styles from "./Wrapper.module.css";

const Wrapper = ({ children }) => {
  return <div className={styles.box}>{children}</div>;
};

export default Wrapper;