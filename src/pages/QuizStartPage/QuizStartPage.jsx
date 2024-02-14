import React from "react";
import styles from "./QuizStartPage.module.scss";
import FollowBtn from "../../assets/image/quiz/follow button.svg";
import Paw30 from "../../assets/image/quiz/貓咪腳印30.svg";
import Paw50 from "../../assets/image/quiz/貓咪腳印50.svg";
import Paw70 from "../../assets/image/quiz/貓咪腳印70.svg";
import Paw90 from "../../assets/image/quiz/貓咪腳印90.svg";
import Paw100 from "../../assets/image/quiz/貓咪腳印100.svg";
import Cat from "../../assets/image/quiz/cat.svg";
import { Link } from "react-router-dom";

const QuizStartPage = () => {
  const textLines = [
    "在一個滿天星斗的夜晚",
    "一隻神秘貓咪出現在你的面前 ",
    "牠自稱是來自遙遠的貓咪王國的使者",
    " 邀請你進入一個充滿奇幻與驚奇的世界",
    "在這個王國中 每一個關卡都是對你測試",
    "而每一步都伴隨著貓咪智慧的啟示",
  ];

  return (
    <div className={styles.quiz}>
      <div className={styles.quizWrapper}>
        <div className={styles.storyText}>
          {textLines.map((line, index) => (
            <div key={index} className={styles.text}>
              {line}
            </div>
          ))}
        </div>
        <div className={styles.buttonWrapper}>
          <Link to={"/quiz"}>
            <button>
              <img src={FollowBtn} alt="FollowBtn" />
            </button>
          </Link>
        </div>
        <div className={styles.pawWrapper}>
          <img className={styles.paw30} src={Paw30} alt="Paw30" />
          <img className={styles.paw50} src={Paw50} alt="Paw50" />
          <img className={styles.paw70} src={Paw70} alt="Paw70" />
          <img className={styles.paw90} src={Paw90} alt="Paw90" />
          <img className={styles.paw100} src={Paw100} alt="Paw100" />
          <img className={styles.cat} src={Cat} alt="cat" />
        </div>
      </div>
    </div>
  );
};

export default QuizStartPage;
