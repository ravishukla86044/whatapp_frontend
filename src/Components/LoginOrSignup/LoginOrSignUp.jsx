import { useState } from "react";
import styled from "styled-components";
import { Login } from "./Login";
import { Signup } from "./Signup";
import { useSelector } from "react-redux";
import { Loading } from "../Loading";
import { GooleSign } from "./GoogleSign";

function LoginOrSignUp() {
  const [isLogin, setIslogin] = useState(true);
  const { isLight, user, isLoading } = useSelector((state) => state.auth);
  return (
    <Div>
      {isLogin ? <Login /> : <Signup />}
      <p onClick={() => setIslogin((pre) => !pre)}>{isLogin ? "Singup" : "Login"}</p>
      <GooleSign />

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

  .loading {
    position: absolute;
    z-index: 12;
  }
`;
export { LoginOrSignUp };
