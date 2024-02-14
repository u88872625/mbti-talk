import React from "react";
import styles from "./UserBox.module.scss";

export const OtherChatBox = ({ message, avatar, time }) => {
  return (
    <div className={styles.chatBoxWrapper}>
      <img src={avatar} alt="MBTI" />
      <div className={styles.otherChatBox}>
        <p className={styles.otherText}>{message}</p>
      </div>
      <div className={styles.timeWrapper}>
        <p className={styles.timeText}>{time}</p>
      </div>
    </div>
  );
};

export const SelfChatBox = ({ message, avatar, time }) => {
  return (
    <div className={styles.selfChatBoxWrapper}>
      <div className={styles.timeWrapper}>
        <p className={styles.timeText}>{time}</p>
      </div>
      <div className={styles.selfChatBox}>
        <p className={styles.selfText}>{message}</p>
      </div>
      <img src={avatar} alt="MBTI" />
    </div>
  );
};
