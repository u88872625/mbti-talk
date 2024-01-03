import React from "react";
import styles from "./ChatPage.module.scss";
import leaveIcon from "../../assets/icon/arrow_insert.svg";
import sendIcon from "../../assets/icon/send.svg";

const ChatPage = () => {
  return (
    <div className={styles.chat}>
      <div className={styles.wrapper}>
        <div className={styles.messageWrapper}></div>
        <div className={styles.inputWrapper}>
          <img src={leaveIcon} alt="離開" />
          <input type="text" placeholder="請輸入訊息" />
          <img src={sendIcon} alt="傳送" />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
