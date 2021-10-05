import "./App.css";
import { LeftBox } from "./Components/LeftBox/LeftBox";
import { RightBox } from "./Components/RightBox/Rightbox";

function App() {
  return (
    <div className="App">
      <div className="box">
        <LeftBox />
        <RightBox />
      </div>
    </div>
  );
}

export default App;
