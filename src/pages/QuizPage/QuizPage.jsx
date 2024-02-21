import React, { useContext, useEffect, useState } from "react";
import styles from "./QuizPage.module.scss";
import Questions from "../../components/QuizComponent/Questions";
import Results from "../../components/QuizComponent/Results";
import { SocketContext, UserInfoContext } from "../../utils/context";
import { useNavigate } from "react-router-dom";

const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [finalResult, setFinalResult] = useState("");
  const socket = useContext(SocketContext);
  const { userInfo, setUserInfo } = useContext(UserInfoContext);
  const navigate = useNavigate();

  const handleOptionSelect = (next) => {
    if (typeof next === "object") {
      setFinalResult(next);
    } else {
      setCurrentQuestionIndex(next);
    }
  };

  const handleMatchButtonClick = () => {
    if (finalResult) {
      socket.emit("selectMBTI", {
        id: userInfo.id,
        mbtiType: finalResult.type,
        mbtiImage: finalResult.avatar,
      });
    }
  };

  useEffect(() => {
    localStorage.removeItem("userInfo");

    socket.on("userInfo", (user) => {
      setUserInfo(user);
      localStorage.setItem("userInfo", JSON.stringify(user));

      navigate("/mode");
    });
    return () => {
      socket.off("userInfo");
    };
  }, [socket, setUserInfo, navigate]);
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
