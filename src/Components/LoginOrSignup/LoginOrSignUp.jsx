import { useState } from "react";
import styled from "styled-components";
import { Login } from "./Login";
import { Signup } from "./Signup";

function LoginOrSignUp() {
  const [isLogin, setIslogin] = useState(true);
  return (
    <Div>
      {isLogin ? <Login /> : <Signup />}
      <p onClick={() => setIslogin((pre) => !pre)}>{isLogin ? "Singup" : "Login"}</p>
    </Div>
  );
}

const Div = styled.div``;
export { LoginOrSignUp };
