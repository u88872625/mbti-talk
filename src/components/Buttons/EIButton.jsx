import React from "react";
import styles from "./EIButton.module.scss";

const EIButton = ({ text }) => {
  return (
    <div>
      <button className={styles.EIButton}>{text}</button>
    </div>
  );
};

export default EIButton;
