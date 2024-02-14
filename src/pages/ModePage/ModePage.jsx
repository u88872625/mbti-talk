import React, { useContext, useEffect, useState } from "react";
import styles from "./ModePage.module.scss";
import PinkPaw from "../../assets/image/paw-pink.svg";
import YellowPaw from "../../assets/image/paw-yellow.svg";
import BluePaw from "../../assets/image/paw-blue.svg";
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
    return <div>Loading...</div>;
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
