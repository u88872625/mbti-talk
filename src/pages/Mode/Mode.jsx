import React from "react";
import styles from "./Mode.module.scss";
import PinkPaw from "../../assets/image/paw-pink.svg";
import YellowPaw from "../../assets/image/paw-yellow.svg";
import BluePaw from "../../assets/image/paw-blue.svg";

const Mode = () => {
  return (
    <div className={styles.mode}>
      <div className={styles.wrapper}>
        <h3>請選擇聊天模式</h3>
        <div className={styles.optionWrapper}>
          <div className={styles.option}>
            <img src={PinkPaw} alt="隨機聊天" />
            <h3>隨機聊天</h3>
          </div>
          <div className={styles.option}>
            <img src={YellowPaw} alt="指定配對聊天" />
            <h3>指定配對聊天</h3>
          </div>
          <div className={styles.option}>
            <img src={BluePaw} alt="E/I 二選一" />
            <h3>E/I 二選一</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mode;
