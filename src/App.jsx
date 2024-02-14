import "../src/styles/App.module.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SelfSelectPage from "./pages/SelfSelectPage/SelfSelectPage";
import MatchSelectPage from "./pages/MatchSelectPage/MatchSelectPage";
import ModePage from "./pages/ModePage/ModePage";
import EISelectPage from "./pages/EISelectPage/EISelectPage";
import ChatPage from "./pages/ChatPage/ChatPage";
import QuizStartPage from "./pages/QuizStartPage/QuizStartPage";
import { SocketContext, RoomContext, UserInfoContext } from "./utils/context";
import { io } from "socket.io-client";
import { useState } from "react";

const socket = io.connect("https://mbti-talk-socket-io.onrender.com", {
  transports: ["websocket"],
  reconnection: false,
});

function App() {
  const savedUserInfo = JSON.parse(localStorage.getItem("userInfo")) || {};
  const [roomInfo, setRoomInfo] = useState({});
  const [userInfo, setUserInfo] = useState(savedUserInfo);

  return (
    <div className="App">
      <Router>
        <SocketContext.Provider value={socket}>
          <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
            <RoomContext.Provider value={{ roomInfo, setRoomInfo }}>
              <Routes>
                <Route element={<HomePage />} path={"/"}></Route>

                <Route element={<SelfSelectPage />} path={"/select"}></Route>

                <Route
                  element={<MatchSelectPage />}
                  path={"/select-match"}
                ></Route>
                <Route element={<ModePage />} path={"/mode"}></Route>
                <Route element={<EISelectPage />} path={"/E-I-select"}></Route>
                <Route element={<ChatPage />} path={"/chat"}></Route>
                <Route element={<QuizStartPage />} path={"/quiz-start"}></Route>
              </Routes>
            </RoomContext.Provider>
          </UserInfoContext.Provider>
        </SocketContext.Provider>
      </Router>
    </div>
  );
}

export default App;
