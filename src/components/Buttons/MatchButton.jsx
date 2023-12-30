import React from "react";
import styles from "./MatchButton.module.scss";

const MatchButton = ({ text }) => {
  return (
    <div>
      <button className={styles.matchButton}>{text}</button>
    </div>
  );
};

export default MatchButton;
