import GoogleLogin from "react-google-login";

function GooleSign() {
  const success = (res) => {
    console.log(res);
  };

  const failure = (res) => {
    console.log(res);
  };
  return (
    <div>
      <GoogleLogin
        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={success}
        onFailure={failure}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}

export { GooleSign };
