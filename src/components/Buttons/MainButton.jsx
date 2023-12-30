import React from "react";
import styles from "./MainButton.module.scss";

const MainButton = ({ mainText, subText }) => {
  return (
    <div>
      <button className={styles.mainButton}>
        <p className={styles.mainText}>{mainText}</p>
        <p className={styles.subText}>{subText}</p>
      </button>
    </div>
  );
};

export default MainButton;
