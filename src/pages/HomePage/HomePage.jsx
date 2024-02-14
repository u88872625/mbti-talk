import React from "react";
import styles from "./HomePage.module.scss";
import pawIcon from "../../assets/icon/paw-yellow.svg";
import MainButton from "../../components/Buttons/MainButton";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className={styles.home}>
      <div className={styles.wrapper}>
        <div className={styles.titleContent}>
          <h1 className={styles.title}>MBTI Talk</h1>
          <img className={styles.icon} src={pawIcon} alt="paw-icon" />
        </div>
        <h2 className={styles.subTitle}>
          你知道自己的
          <br />
          MBTI嗎？
        </h2>
        <div className={styles.buttonContent}>
          <Link to={"/select"}>
            <MainButton mainText={"Yes"} subText={"(選擇身份)"} />
          </Link>
          <Link to={"/quiz-start"}>
            <MainButton mainText={"No"} subText={"(開始測驗)"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
