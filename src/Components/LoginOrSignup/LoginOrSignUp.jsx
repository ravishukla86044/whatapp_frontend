import { useState } from "react";
import styled from "styled-components";
import { Login } from "./Login";
import { Signup } from "./Signup";
import { useSelector } from "react-redux";
import { Loading } from "../Loading";
import { GooleSign } from "./GoogleSign";
import logo from "../../Assets/logo.png";

function LoginOrSignUp() {
  const [isLogin, setIslogin] = useState(true);
  const { isLight, user, isLoading } = useSelector((state) => state.auth);
  return (
    <Div>
      <img src={logo} alt="Logo" />
      <h1>WhatsApp</h1>
      <button>
        <GooleSign />
      </button>

      {isLogin ? <Login /> : <Signup />}
      <p className="loginText" onClick={() => setIslogin((pre) => !pre)}>
        {isLogin ? "or  Singup" : "or  Login"}
      </p>
      <p className="lastText">
        Powered by <strong>React JS - MongoDB</strong> | Designed by <strong>Ravi Shukla</strong>{" "}
      </p>
      {isLoading && (
        <div className="loading">
          <Loading />
        </div>
      )}
    </Div>
  );
}

const Div = styled.div`
  position: relative;
  box-sizing: border-box;
  background-color: #ece5dd;
  height: 100%;
  padding: 20px;
  /* padding-top: 20px; */
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  & > img {
    width: 100px;
    height: 100px;
  }
  & > h1 {
    margin: 20px;
    color: rgb(0, 61, 61);
  }

  & > button {
    padding: 5px 20px;
    border-radius: 50px 50px 50px 50px;
    border: none;
    font-size: 18px;
    font-weight: 500;
    outline: none;
    cursor: pointer;
    background-color: #189d0e;
    color: white !important;
    box-shadow: 0px 0px 5px rgba(0, 128, 0, 0.452);
    transition: all 0.3s;
  }

  & > button:hover {
    background-color: #168a0e;
    box-shadow: 0px 0px 10px rgba(0, 128, 0, 0.719);
  }
  .loading {
    position: absolute;
    z-index: 12;
    top: 0;
    bottom: 0;
  }
  .lastText {
    font-size: 14px;
    color: teal;
    margin-top: auto;
    padding-top: 5px;
  }
  .loginText {
    color: teal;
    cursor: pointer;
  }
`;
export { LoginOrSignUp };
