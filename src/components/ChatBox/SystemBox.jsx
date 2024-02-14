import React from "react";
import styles from "./SystemBox.module.scss";
import pawIcon from "../../assets/icon/paw-yellow.svg";

const SystemBox = ({ message }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.systemBox}>
        <p className={styles.message}>{message}</p>
        <img className={styles.icon} src={pawIcon} />
      </div>
    </div>
  );
};

export default SystemBox;
