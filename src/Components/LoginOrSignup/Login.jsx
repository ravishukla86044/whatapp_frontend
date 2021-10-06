import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import { loginUser } from "../../Redux/action";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: false,
    password: false,
  });
  const dispatch = useDispatch();
  const onEnter = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setError({ ...error, email: false });
    }
    if (name === "password") {
      setError({ ...error, password: false });
    }
    setForm({ ...form, [name]: value });
  };

  const validateLogin = () => {
    if (form?.email === "" && form?.password === "")
      setError({ email: "Email is required", password: "Password is required" });
    else if (form?.email === "") setError({ error, email: "Email is required" });
    else if (form?.password === "") setError({ error, password: "Password is required" });
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form?.email))
      setError({ error, email: "Ivalid email" });
    else if (form?.password.length < 8)
      setError({ ...error, password: "Password must be atleast 8 characters long" });
  };

  const handelSubmit = (e) => {
    validateLogin();
    if (error.email === false && !error.password === false) {
      dispatch(loginUser(form));
    }
  };

  return (
    <Log>
      <div>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          onKeyUp={onEnter}
          name="email"
          required
          error={error.email}
          helperText={error.email}
        />
      </div>

      <div>
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          onKeyUp={onEnter}
          name="password"
          required
          error={error.password}
          helperText={error.password}
        />
      </div>
      <div className="loginSubmit">
        <Button variant="contained" color="primary" onClick={handelSubmit}>
          Login
        </Button>
      </div>
    </Log>
  );
}

const Log = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  & > div {
    margin-top: 15px;
  }

  & .MuiFormControl-root {
    width: 100%;
    min-width: 300px;
  }
  & .MuiOutlinedInput-root {
    border-radius: 50px;
  }

  .loginSubmit {
    display: flex;
    justify-content: center;
  }
  .loginSubmit .MuiButton-containedPrimary {
    border-radius: 50px;
    background-color: #189d0e;
  }
`;
export { Login };
