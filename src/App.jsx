import "./App.css";
import { LeftBox } from "./Components/LeftBox/LeftBox";
import { RightBox } from "./Components/RightBox/Rightbox";
import { useState, useEffect } from "react";
import axios from "axios";
import { Loading } from "./Components/Loading";
import { LoginOrSignUp } from "./Components/LoginOrSignup/LoginOrSignUp";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {}, []);

  return (
    <div className="App">
      {!user?._id ? (
        <LoginOrSignUp />
      ) : (
        <div className="box">
          <LeftBox />
          <RightBox />
        </div>
      )}
    </div>
  );
}

export default App;
