import React, { useContext, useEffect, useState } from "react";
import styles from "./SelfSelectPage.module.scss";
import MBTIselect from "../../components/MBTIselect/MBTIselect";
import MatchButton from "../../components/Buttons/MatchButton";
import { useNavigate } from "react-router-dom";
import { SocketContext } from "../../utils/context";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "../../store/modules/user";

const SelfSelect = () => {
  const [selectMBTI, setSelectMBTI] = useState(null);
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.userInfo);
  const socket = useContext(SocketContext);
  const navigate = useNavigate();

  const handleMBTISelect = (MBTI) => {
    setSelectMBTI(MBTI);
  };

  const handleMatchButtonClick = () => {
    if (selectMBTI) {
      const updatedUserInfo = {
        ...userInfo,
        id: socket.id,
        mbtiType: selectMBTI.type,
        mbtiImage: selectMBTI.image,
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
    <div className={styles.selfSelect}>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>請選擇你的MBTI</h3>
        <div className={styles.selectWrapper}>
          <MBTIselect onMBTISelect={handleMBTISelect} />
        </div>
        <div className={styles.buttonWrapper}>
          <MatchButton text={"進入大廳"} onClick={handleMatchButtonClick} />
        </div>
      </div>
    </div>
  );
};

export default SelfSelect;
