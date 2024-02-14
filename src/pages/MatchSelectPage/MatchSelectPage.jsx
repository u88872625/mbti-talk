import React from "react";
import styles from "./MatchSelectPage.module.scss";
import MBTIselect from "../../components/MBTIselect/MBTIselect";
import MatchButton from "../../components/Buttons/MatchButton";

const MatchSelect = () => {
  return (
    <div className={styles.matchSelect}>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>選擇你想聊天的對象</h3>
        <div className={styles.selectWrapper}>
          <MBTIselect />
        </div>
        <div className={styles.buttonWrapper}>
          <MatchButton text={"開始配對"} />
        </div>
      </div>
    </div>
  );
};

export default MatchSelect;
