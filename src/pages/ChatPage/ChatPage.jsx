import React, { useContext, useEffect, useState, useRef } from "react";
import styles from "./ChatPage.module.scss";
import leaveIcon from "../../assets/icon/arrow_insert.svg";
import sendIcon from "../../assets/icon/send.svg";
import SystemBox from "../../components/ChatBox/SystemBox";
import { OtherChatBox, SelfChatBox } from "../../components/ChatBox/UserBox";
import { SocketContext } from "../../utils/context";
import { useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setRoomInfo } from "../../store/modules/user";
import useChat from "../../hooks/useChat";

const ChatPage = () => {
  const [message, setMessage] = useState("");
  const socket = useContext(SocketContext);
  const roomInfo = useSelector((state) => state.user.roomInfo);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const messageWrapperRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { messages, setMessages, isTyping } = useChat(socket, userInfo);

  useEffect(() => {
    if (!userInfo) {
      navigate("/select");
    } else if (roomInfo.room) {
      socket.emit("join", { userInfo, roomInfo });
    }
  }, [userInfo, roomInfo, socket, navigate]);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = "";
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [socket, userInfo, roomInfo]);

  const debounce = (fn, delay) => {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn(...args), delay);
    };
  };

  const emitTypingEvent = debounce(() => {
    socket.emit("typing", { userInfo, roomInfo });
  }, 500);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
    emitTypingEvent();
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([
        ...messages,
        {
          id: userInfo.id,
          name: userInfo.mbtiType,
          content: message,
          timeStamp: new Date().toLocaleTimeString([], {
            hour12: false,
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
      socket.emit("sendMessage", { message, userInfo, roomInfo });
      socket.emit("stopTyping", {
        userInfo,
        roomInfo,
      });
      setMessage("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleLeaveRoom = () => {
    dispatch(setRoomInfo({}));
    localStorage.removeItem("roomInfo");
    socket.emit("leaveRoom", {
      userInfo: userInfo,
      roomInfo: roomInfo,
    });
    setShow(false);
    navigate("/mode");
  };

  useEffect(() => {
    if (messageWrapperRef.current) {
      const { scrollHeight, clientHeight } = messageWrapperRef.current;
      messageWrapperRef.current.scrollTop = scrollHeight - clientHeight;
    }
  }, [messages]);

  return (
    <div className={styles.chat}>
      <div className={styles.wrapper}>
        <div className={styles.messageWrapper} ref={messageWrapperRef}>
          {messages &&
            messages.map((message, index) =>
              message.name === "admin" ? (
                <SystemBox key={index} message={message.content} />
              ) : message.id === userInfo.id ? (
                <SelfChatBox
                  key={index}
                  avatar={userInfo.mbtiImage}
                  message={message.content}
                  time={message.timeStamp}
                />
              ) : (
                <OtherChatBox
                  key={index}
                  avatar={message.image}
                  message={message.content}
                  time={message.timeStamp}
                />
              )
            )}
          {isTyping && <p className={styles.isTypingText}>對方正在輸入中...</p>}
        </div>
        <div className={styles.inputWrapper}>
          <button>
            <img src={leaveIcon} alt="離開" onClick={handleShow} />
          </button>

          <input
            type="text"
            placeholder="請輸入訊息"
            value={message}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <button>
            <img src={sendIcon} alt="傳送" onClick={handleSendMessage} />
          </button>
        </div>

        <Modal
          show={show}
          onHide={handleClose}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body>
            <div className={styles.textWrapper}>
              <p className={styles.modalText}>確定要離開嗎？</p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={handleClose}
              className={styles.modalButton}
            >
              取消
            </Button>
            <Button
              variant="primary"
              onClick={handleLeaveRoom}
              className={styles.modalButton}
            >
              確定
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default ChatPage;
