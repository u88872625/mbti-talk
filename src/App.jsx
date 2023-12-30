import "../src/styles/App.module.scss";
import MainButton from "./components/Buttons/MainButton";
import MatchButton from "./components/Buttons/MatchButton";
import SystemBox from "./components/Chat/SystemBox";

function App() {
  return (
    <div className="App">
      <SystemBox />
    </div>
  );
}

export default App;
