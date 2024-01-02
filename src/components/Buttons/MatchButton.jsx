import React from "react";
import styles from "./MatchButton.module.scss";

const MatchButton = ({ text, onClick }) => {
  return (
    <div>
      <button className={styles.matchButton} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default MatchButton;
