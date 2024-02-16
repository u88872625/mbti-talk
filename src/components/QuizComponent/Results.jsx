import React from "react";
import MatchButton from "../Buttons/MatchButton";
import ISTP from "../../assets/image/quiz/ISTP.png";
import ISFP from "../../assets/image/quiz/ISFP.png";
import INTP from "../../assets/image/quiz/INTP.png";
import INFP from "../../assets/image/quiz/INFP.png";
import ESTP from "../../assets/image/quiz/ESTP.png";
import ESFP from "../../assets/image/quiz/ESFP.png";
import ENTP from "../../assets/image/quiz/ENTP.png";
import ENFP from "../../assets/image/quiz/ENFP.png";
import ISTJ from "../../assets/image/quiz/ISTJ.png";
import ISFJ from "../../assets/image/quiz/ISFJ.png";
import INTJ from "../../assets/image/quiz/INTJ.png";
import INFJ from "../../assets/image/quiz/INFJ.png";
import ESTJ from "../../assets/image/quiz/ESTJ.png";
import ESFJ from "../../assets/image/quiz/ESFJ.png";
import ENTJ from "../../assets/image/quiz/ENTJ.png";
import ENFJ from "../../assets/image/quiz/ENFJ.png";

const Results = ({ mbtiType, onMatchButton }) => {
  const resultImageMap = {
    INTP: { Imamge: INTP, avatar: INTP },
    INTJ: INTJ,
    INFP: INFP,
    INFJ: INFJ,
    ISTP: ISTP,
    ISTJ: ISTJ,
    ISFP: ISFP,
    ISFJ: ISFJ,
    ENTP: ENTP,
    ENTJ: ENTJ,
    ENFP: ENFP,
    ENFJ: ENFJ,
    ESTP: ESTP,
    ESTJ: ESTJ,
    ESFP: ESFP,
    ESFJ: ESFJ,
  };

  return (
    <div>
      <img src={resultImageMap[mbtiType]} alt="{`Result for ${mbtiType}`}" />
      <MatchButton text={"進入大廳"} onClick={onMatchButton} />
    </div>
  );
};

export default Results;
