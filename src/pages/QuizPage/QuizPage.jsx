import React, { useContext, useEffect, useState } from "react";
import styles from "./QuizPage.module.scss";
import Questions from "../../components/QuizComponent/Questions";
import Results from "../../components/QuizComponent/Results";
import { SocketContext } from "../../utils/context";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "../../store/modules/user";

const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [finalResult, setFinalResult] = useState("");
  const socket = useContext(SocketContext);
  const userInfo = useSelector((state) => state.user.userInfo);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOptionSelect = (next) => {
    if (typeof next === "object") {
      setFinalResult(next);
    } else {
      setCurrentQuestionIndex(next);
    }
  };

  const handleMatchButtonClick = () => {
    if (finalResult) {
      const updatedUserInfo = {
        ...userInfo,
        id: socket.id,
        mbtiType: finalResult.type,
        mbtiImage: finalResult.avatar,
      };

      dispatch(setUserInfo(updatedUserInfo));
      localStorage.setItem("userInfo", JSON.stringify(updatedUserInfo));

      if (socket.connected) {
        socket.emit("selectMBTI", updatedUserInfo);
        navigate("/mode");
      } else {
        alert("連接失敗，請重新整理或稍後再試！");
      }
    }
  };

  return (
    <div>
      {finalResult === "" ? (
        <Question
          question={Questions[currentQuestionIndex]}
          onOptionSelect={handleOptionSelect}
        />
      ) : (
        <Results
          mbtiType={finalResult.type}
          onMatchButton={handleMatchButtonClick}
        />
      )}
    </div>
  );
};

export default QuizPage;

const Question = ({ question, onOptionSelect }) => {
  return (
    <div className={styles.questionWrapper}>
      <div className={styles.content}>
        <img
          className={styles.question}
          src={question.question}
          alt="Question"
        />
        <img
          className={styles.illustration}
          src={question.illustration}
          alt="illustration"
        />
        <div className={styles.optionWrapper}>
          {Object.entries(question.options).map(([key, option]) => (
            <button
              key={key}
              onClick={() => onOptionSelect(question.nextQuestion[key])}
            >
              <img src={option} alt="option" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
