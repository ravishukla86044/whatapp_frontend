import GoogleLogin from "react-google-login";
import styled from "styled-components";

function GooleSign() {
  const success = (res) => {
    console.log(res);
  };

  const failure = (res) => {
    console.log(res);
  };
  return (
    <Goog>
      <GoogleLogin
        className="googleLogin"
        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        buttonText="Google SignIn"
        onSuccess={success}
        onFailure={failure}
        cookiePolicy={"single_host_origin"}
      />
    </Goog>
  );
}

const Goog = styled.div`
  background-color: none;
  background: none !important;
  color: white !important;
  & button {
    background-color: none !important;
    background: none !important;
    box-shadow: none !important;
  }

  .googleLogin {
    background-color: none !important;
    background: none !important;
  }
  .googleLogin div {
    background-color: none !important;
    background: none !important;
  }
  .googleLogin span {
    color: white !important;
  }
`;

export { GooleSign };
