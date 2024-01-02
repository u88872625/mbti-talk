import React from "react";
import styles from "./EISelect.module.scss";
import EIButton from "../../components/Buttons/EIButton";
import MatchButton from "../../components/Buttons/MatchButton";

const EISelect = () => {
  return (
    <div className={styles.EISelect}>
      <div className={styles.wrapper}>
        <h1>E/I 二選一</h1>
        <h2>選擇你想要的配對類型</h2>
        <div className={styles.optionWrapper}>
          <EIButton text={"E"} />
          <EIButton text={"I"} />
        </div>
        <div className={styles.buttonWrapper}>
          <MatchButton text={"開始配對"} />
        </div>
      </div>
    </div>
  );
};

export default EISelect;
