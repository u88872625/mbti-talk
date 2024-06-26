import React, { useContext, useEffect, useState } from "react";
import styles from "./ModePage.module.scss";
import PinkPaw from "../../assets/image/talk/paw-pink.png";
import YellowPaw from "../../assets/image/talk/paw-yellow.png";
import BluePaw from "../../assets/image/talk/paw-blue.png";
import Loading from "../../components/Loading/Loading";
import MatchButton from "../../components/Buttons/MatchButton";
import { useNavigate } from "react-router-dom";
import { SocketContext } from "../../utils/context";
import { useSelector, useDispatch } from "react-redux";
import { setRoomInfo } from "../../store/modules/user";

const Mode = () => {
  const [loading, setLoading] = useState(false);
  const socket = useContext(SocketContext);
  const roomInfo = useSelector((state) => state.user.roomInfo);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const dispatch = useDispatch();
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
    const handleRandomRoomNum = (randomRoomNum) => {
      setLoading(false);
      const newRoomInfo = { mode: "random", room: randomRoomNum };
      dispatch(setRoomInfo(newRoomInfo));
      localStorage.setItem("roomInfo", JSON.stringify(newRoomInfo));

      navigate("/chat");
    };

    socket.on("randomRoomNum", handleRandomRoomNum);

    return () => {
      socket.off("randomRoomNum", handleRandomRoomNum);
    };
  }, [socket, navigate, userInfo, dispatch]);

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
            <img
              className={styles.unOpened}
              src={YellowPaw}
              alt="指定配對聊天"
            />
            <h3>指定配對聊天</h3>
            <p>(敬請期待)</p>
          </div>

          <div className={styles.option}>
            <img className={styles.unOpened} src={BluePaw} alt="E/I 二選一" />
            <h3>E/I 二選一</h3>
            <p>(敬請期待)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mode;
