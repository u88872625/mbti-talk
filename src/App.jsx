import "../src/styles/App.module.scss";
import Home from "./pages/Home/Home";
import SelfSelect from "./pages/SelfSelect/SelfSelect";
import MatchSelect from "./pages/MatchSelect/MatchSelect";

function App() {
  return (
    <div className="App">
      <SelfSelect />
    </div>
  );
}

export default App;
