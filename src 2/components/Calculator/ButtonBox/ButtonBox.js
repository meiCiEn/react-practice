import styles from "./ButtonBox.module.css";

const ButtonBox = ({ children }) => {
  return <div className={styles.buttonBox}>{children}</div>;
};

export default ButtonBox;