import "../src/styles/App.module.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SelfSelectPage from "./pages/SelfSelectPage/SelfSelectPage";
import MatchSelectPage from "./pages/MatchSelectPage/MatchSelectPage";
import ModePage from "./pages/ModePage/ModePage";
import EISelectPage from "./pages/EISelectPage/EISelectPage";
import ChatPage from "./pages/ChatPage/ChatPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<HomePage />} path={"/"}></Route>
          <Route element={<SelfSelectPage />} path={"/select"}></Route>
          <Route element={<MatchSelectPage />} path={"/select-match"}></Route>
          <Route element={<ModePage />} path={"/mode"}></Route>
          <Route element={<EISelectPage />} path={"/E-I-select"}></Route>
          <Route element={<ChatPage />} path={"/chat"}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
