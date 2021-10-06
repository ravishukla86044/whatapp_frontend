import "./App.css";
import { LeftBox } from "./Components/LeftBox/LeftBox";
import { RightBox } from "./Components/RightBox/Rightbox";
import { useState, useEffect } from "react";
import axios from "axios";
import { Loading } from "./Components/Loading";
import { LoginOrSignUp } from "./Components/LoginOrSignup/LoginOrSignUp";
import { useSelector } from "react-redux";

function App() {
  const { user } = useSelector((state) => state.auth);
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
