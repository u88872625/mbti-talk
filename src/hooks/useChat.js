import { useState, useEffect } from "react";

const useChat = (socket, userInfo) => {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!socket) return;

    const handleMessage = (newMessage) => {
      if (newMessage.id === userInfo.id) return;
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: newMessage.id,
          name: newMessage.user,
          content: newMessage.text,
          image: newMessage.image,
          timeStamp: new Date().toLocaleTimeString([], {
            hour12: false,
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    };

    const handleTyping = ({ userInfo: typingUserInfo, isTyping }) => {
      if (typingUserInfo.id !== userInfo.id) {
        setIsTyping(isTyping);
      }
    };

    socket.on("message", handleMessage);
    socket.on("typing", handleTyping);

    return () => {
      socket.off("message", handleMessage);
      socket.off("typing", handleTyping);
    };
  }, [socket, userInfo.id]);

  return { messages, setMessages, isTyping, setIsTyping };
};

export default useChat;
