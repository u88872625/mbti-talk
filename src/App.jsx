import "../src/styles/App.module.scss";
import Home from "./pages/Home/Home";
import SelfSelect from "./pages/SelfSelect/SelfSelect";
import MatchSelect from "./pages/MatchSelect/MatchSelect";
import Mode from "./pages/Mode/Mode";
import EISelect from "./pages/EISelect/EISelect";

function App() {
  return (
    <div className="App">
      <EISelect />
    </div>
  );
}

export default App;
