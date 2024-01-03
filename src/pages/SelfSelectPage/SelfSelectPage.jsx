import React, { useState } from "react";
import styles from "./SelfSelectPage.module.scss";
import MBTIselect from "../../components/MBTIselect/MBTIselect";
import MatchButton from "../../components/Buttons/MatchButton";
import { Link } from "react-router-dom";

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
          <Link to={"/mode"}>
            <MatchButton text={"進入大廳"} onClick={handleMatchButtonClick} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SelfSelect;
