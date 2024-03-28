import styles from "../src/styles/App.module.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import HomePage from "./pages/HomePage/HomePage";
import SelfSelectPage from "./pages/SelfSelectPage/SelfSelectPage";
import MatchSelectPage from "./pages/MatchSelectPage/MatchSelectPage";
import ModePage from "./pages/ModePage/ModePage";
import EISelectPage from "./pages/EISelectPage/EISelectPage";
import ChatPage from "./pages/ChatPage/ChatPage";
import QuizStartPage from "./pages/QuizStartPage/QuizStartPage";
import QuizPage from "./pages/QuizPage/QuizPage";
import { SocketContext } from "./utils/context";
import { io } from "socket.io-client";

const socket = io.connect("https://mbti-talk-socket-io.onrender.com", {
  transports: ["websocket"],
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 2000,
});

function App() {
  const basename = process.env.PUBLIC_URL;
  return (
    <div className="App">
      <Router basename={basename}>
        <div className={styles.desktopWarning}>
          <p>
            此內容只支援手機
            <br />
            請見諒
          </p>
        </div>
        <div className={styles.mobileContent}>
          <SocketContext.Provider value={socket}>
            <Provider store={store}>
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
                <Route element={<QuizPage />} path={"/quiz"}></Route>
              </Routes>
            </Provider>
          </SocketContext.Provider>
        </div>
      </Router>
    </div>
  );
}

export default App;
