import React, { useState } from "react";
import styles from "./SelfSelect.module.scss";
import MBTIselect from "../../components/MBTIselect/MBTIselect";
import MatchButton from "../../components/Buttons/MatchButton";

const SelfSelect = () => {
  const [selectMBTI, setSelectMBTI] = useState(null);

  const handleMBTISelect = (MBTI) => {
    setSelectMBTI(MBTI);
  };

  const handleMatchButtonClick = () => {
    if (selectMBTI) {
      localStorage.setItem("MBTIType", selectMBTI.type);
      localStorage.setItem("MBTIImage", selectMBTI.image);
    }
  };

  return (
    <div className={styles.selfSelect}>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>請選擇你的MBTI</h3>
        <div className={styles.selectWrapper}>
          <MBTIselect onMBTISelect={handleMBTISelect} />
        </div>
        <div className={styles.buttonWrapper}>
          <MatchButton text={"進入大廳"} onClick={handleMatchButtonClick} />
        </div>
      </div>
    </div>
  );
};

export default SelfSelect;
