// Wrapper.js - this will hold all the child components in place
import styles from "./Wrapper.module.css";

const Wrapper = ({ children }) => {
  return <div className={styles.box}><div className={styles.wrapper}>{children}</div></div>;
};

export default Wrapper;