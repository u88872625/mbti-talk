import Q0 from "../../assets/image/quiz/Q0.svg";
import Q0optionF from "../../assets/image/quiz/Q0option-F.svg";
import Q0optionT from "../../assets/image/quiz/Q0option-T.svg";
import Q0Icon from "../../assets/icon/Q0door.svg";
import Q1 from "../../assets/image/quiz/Q1.svg";
import Q1optionTJ from "../../assets/image/quiz/Q1option-TJ.svg";
import Q1optionTP from "../../assets/image/quiz/Q1option-TP.svg";
import Q1Icon from "../../assets/icon/Q1-road.svg";
import Q1optionFJ from "../../assets/image/quiz/Q1option-FJ.svg";
import Q1optionFP from "../../assets/image/quiz/Q1option-FP.svg";
import Q2 from "../../assets/image/quiz/Q2.svg";
import Q2optionAP from "../../assets/image/quiz/Q2opt-XSTP-XSFP.svg";
import Q2optionBP from "../../assets/image/quiz/Q2opt-XNTP-XNFP.svg";
import Q2optionAJ from "../../assets/image/quiz/Q2option-XSTJ XSFJ.svg";
import Q2optionBJ from "../../assets/image/quiz/Q2option-XNTJ XNFJ.svg";
import Q2Icon from "../../assets/icon/Q2fork-road.svg";
import Q3 from "../../assets/image/quiz/Q3.svg";
import Q3optionESTP from "../../assets/image/quiz/Q3option-ESTP.svg";
import Q3optionISTP from "../../assets/image/quiz/Q3option-ISTP.svg";
import Q3optionESFP from "../../assets/image/quiz/Q3option-ESFP.svg";
import Q3optionISFP from "../../assets/image/quiz/Q3option-ISFP.svg";
import Q3optionENTP from "../../assets/image/quiz/option-ENTP.svg";
import Q3optionINTP from "../../assets/image/quiz/option-INTP.svg";
import Q3optionENFP from "../../assets/image/quiz/option-ENFP.svg";
import Q3optionINFP from "../../assets/image/quiz/option-INFP.svg";
import Q3optionESTJ from "../../assets/image/quiz/option-ESTJ.svg";
import Q3optionISTJ from "../../assets/image/quiz/option-ISTJ.svg";
import Q3optionESFJ from "../../assets/image/quiz/option-ESFJ.svg";
import Q3optionISFJ from "../../assets/image/quiz/option-ISFJ.svg";
import Q3optionENTJ from "../../assets/image/quiz/option-ENTJ.svg";
import Q3optionINTJ from "../../assets/image/quiz/option-INTJ.svg";
import Q3optionENFJ from "../../assets/image/quiz/option-ENFJ.svg";
import Q3optionINFJ from "../../assets/image/quiz/option-INFJ.svg";
import Q3Icon from "../../assets/icon/Q3cat-king.svg";
import ISTPAvatar from "../../assets/image/talk/ISTP-avatar.png";
import ISTJAvatar from "../../assets/image/talk/ISTJ-avatar.png";
import ISFPAvatar from "../../assets/image/talk/ISFP-avatar.png";
import ISFJAvatar from "../../assets/image/talk/ISFJ-avatar.png";
import INTPAvatar from "../../assets/image/talk/INTP-avatar.png";
import INTJAvatar from "../../assets/image/talk/INTJ-avatar.png";
import INFPAvatar from "../../assets/image/talk/INFP-avatar.png";
import INFJAvatar from "../../assets/image/talk/INFJ-avatar.png";
import ESTPAvatar from "../../assets/image/talk/ESTP-avatar.png";
import ESTJAvatar from "../../assets/image/talk/ESTJ-avatar.png";
import ESFPAvatar from "../../assets/image/talk/ESFP-avatar.png";
import ESFJAvatar from "../../assets/image/talk/ESFJ-avatar.png";
import ENTPAvatar from "../../assets/image/talk/ENTP-avatar.png";
import ENTJAvatar from "../../assets/image/talk/ENTJ-avatar.png";
import ENFPAvatar from "../../assets/image/talk/ENFP-avatar.png";
import ENFJAvatar from "../../assets/image/talk/ENFJ-avatar.png";

const Questions = [
  {
    question: Q0,
    illustration: Q0Icon,
    options: {
      A: Q0optionT,
      B: Q0optionF,
    },
    nextQuestion: { A: 1, B: 2 },
  },
  {
    question: Q1, //T
    illustration: Q1Icon,
    options: {
      A: Q1optionTJ,
      B: Q1optionTP,
    },
    nextQuestion: { A: 4, B: 3 },
  },
  {
    question: Q1, //F
    illustration: Q1Icon,
    options: {
      A: Q1optionFJ,
      B: Q1optionFP,
    },
    nextQuestion: { A: 6, B: 5 },
  },
  {
    question: Q2, //TP
    illustration: Q2Icon,
    options: {
      A: Q2optionAP,
      B: Q2optionBP,
    },
    nextQuestion: { A: 7, B: 9 },
  },
  {
    question: Q2, //TJ
    illustration: Q2Icon,
    options: {
      A: Q2optionAJ,
      B: Q2optionBJ,
    },
    nextQuestion: { A: 11, B: 13 },
  },
  {
    question: Q2, //FP
    illustration: Q2Icon,
    options: {
      A: Q2optionAP,
      B: Q2optionBP,
    },
    nextQuestion: { A: 8, B: 10 },
  },
  {
    question: Q2, //FJ
    illustration: Q2Icon,
    options: {
      A: Q2optionAJ,
      B: Q2optionBJ,
    },
    nextQuestion: { A: 12, B: 14 },
  },
  {
    question: Q3, //?STP
    illustration: Q3Icon,
    options: {
      A: Q3optionESTP,
      B: Q3optionISTP,
    },
    nextQuestion: {
      A: { type: "ESTP", avatar: ESTPAvatar },
      B: { type: "ISTP", avatar: ISTPAvatar },
    },
  },
  {
    question: Q3, //?SFP
    illustration: Q3Icon,
    options: {
      A: Q3optionESFP,
      B: Q3optionISFP,
    },
    nextQuestion: {
      A: { type: "ESFP", avatar: ESFPAvatar },
      B: { type: "ISFP", avatar: ISFPAvatar },
    },
  },
  {
    question: Q3, //?NTP
    illustration: Q3Icon,
    options: {
      A: Q3optionENTP,
      B: Q3optionINTP,
    },
    nextQuestion: {
      A: { type: "ENTP", avatar: ENTPAvatar },
      B: { type: "INTP", avatar: INTPAvatar },
    },
  },

  {
    question: Q3, //?NFP
    illustration: Q3Icon,
    options: {
      A: Q3optionENFP,
      B: Q3optionINFP,
    },
    nextQuestion: {
      A: { type: "ENFP", avatar: ENFPAvatar },
      B: { type: "INFP", avatar: INFPAvatar },
    },
  },
  {
    question: Q3, //?STJ
    illustration: Q3Icon,
    options: {
      A: Q3optionESTJ,
      B: Q3optionISTJ,
    },
    nextQuestion: {
      A: { type: "ESTJ", avatar: ESTJAvatar },
      B: { type: "ISTJ", avatar: ISTJAvatar },
    },
  },
  {
    question: Q3, //?SFJ
    illustration: Q3Icon,
    options: {
      A: Q3optionESFJ,
      B: Q3optionISFJ,
    },
    nextQuestion: {
      A: { type: "ESFJ", avatar: ESFJAvatar },
      B: { type: "ISFJ", avatar: ISFJAvatar },
    },
  },
  {
    question: Q3, //?NTJ
    illustration: Q3Icon,
    options: {
      A: Q3optionENTJ,
      B: Q3optionINTJ,
    },
    nextQuestion: {
      A: { type: "ENTJ", avatar: ENTJAvatar },
      B: { type: "INTJ", avatar: INTJAvatar },
    },
  },
  {
    question: Q3, //?NFJ
    illustration: Q3Icon,
    options: {
      A: Q3optionENFJ,
      B: Q3optionINFJ,
    },
    nextQuestion: {
      A: { type: "ENFJ", avatar: ENFJAvatar },
      B: { type: "INFJ", avatar: INFJAvatar },
    },
  },
];

export default Questions;
