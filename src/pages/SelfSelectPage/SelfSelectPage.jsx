import React, { useContext, useEffect, useState } from "react";
import styles from "./SelfSelectPage.module.scss";
import MBTIselect from "../../components/MBTIselect/MBTIselect";
import MatchButton from "../../components/Buttons/MatchButton";
import { Link, useNavigate } from "react-router-dom";
import { SocketContext, UserInfoContext } from "../../utils/context";

const SelfSelect = () => {
  const [selectMBTI, setSelectMBTI] = useState(null);
  const { userInfo, setUserInfo } = useContext(UserInfoContext);

  const socket = useContext(SocketContext);
  const navigate = useNavigate();

  const handleMBTISelect = (MBTI) => {
    setSelectMBTI(MBTI);
  };

  const handleMatchButtonClick = () => {
    if (selectMBTI) {
      socket.emit("selectMBTI", {
        id: userInfo.id,
        mbtiType: selectMBTI.type,
        mbtiImage: selectMBTI.image,
      });
    }
  };

  useEffect(() => {
    localStorage.removeItem("userInfo");

    socket.on("userInfo", (user) => {
      console.log("Received user info:", user);
      setUserInfo(user);
      localStorage.setItem("userInfo", JSON.stringify(user));

      navigate("/mode");
    });
    return () => {
      socket.off("userInfo");
    };
  }, [socket, setUserInfo, navigate]);

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
