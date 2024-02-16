import React, { useContext, useEffect, useState } from "react";
import styles from "./ModePage.module.scss";
import PinkPaw from "../../assets/image/talk/paw-pink.svg";
import YellowPaw from "../../assets/image/talk/paw-yellow.svg";
import BluePaw from "../../assets/image/talk/paw-blue.svg";
import Loading from "../../components/Loading/Loading";
import MatchButton from "../../components/Buttons/MatchButton";
import { useNavigate } from "react-router-dom";
import {
  SocketContext,
  RoomContext,
  UserInfoContext,
} from "../../utils/context";

const Mode = () => {
  const [loading, setLoading] = useState(false);
  const socket = useContext(SocketContext);
  const { roomInfo, setRoomInfo } = useContext(RoomContext);
  const { userInfo } = useContext(UserInfoContext);
  const navigate = useNavigate();
  console.log(userInfo);
  console.log(roomInfo);

  const handleRandomChat = () => {
    setLoading(true);
    socket.emit("randomChat");
  };

  const handleCancelRandomChat = () => {
    socket.emit("cancelRandomChat");
    setLoading(false);
    navigate("/mode");
  };
  useEffect(() => {
    socket.on("randomRoomNum", (randomRoomNum) => {
      setLoading(false);
      const newRoomInfo = { mode: "random", room: randomRoomNum };
      setRoomInfo(newRoomInfo);
      localStorage.setItem("roomInfo", JSON.stringify(newRoomInfo));
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      navigate("/chat");
    });
    return () => {
      socket.off("randomRoomNum");
    };
  }, [socket, setRoomInfo, navigate, userInfo]);

  useEffect(() => {
    if (!userInfo.mbtiType) {
      navigate("/select");
    }
  }, []);

  if (loading) {
    return (
      <div>
        <div className={styles.loadingWrapper}>
          <Loading />
          <p>等待配對中...</p>
          <MatchButton text={"取消"} onClick={handleCancelRandomChat} />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.mode}>
      <div className={styles.wrapper}>
        <h3>請選擇聊天模式</h3>
        <div className={styles.optionWrapper}>
          <div className={styles.option} onClick={handleRandomChat}>
            <img src={PinkPaw} alt="隨機聊天" />
            <h3>隨機聊天</h3>
          </div>

          <div className={styles.option}>
            <img src={YellowPaw} alt="指定配對聊天" />
            <h3>
              指定配對聊天
              <br /> (Comming Soon...)
            </h3>
          </div>

          <div className={styles.option}>
            <img src={BluePaw} alt="E/I 二選一" />
            <h3>
              E/I 二選一 <br /> (Comming Soon...)
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mode;
