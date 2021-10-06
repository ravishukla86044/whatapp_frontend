import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import { loginUser } from "../../Redux/action";

function Login() {
  const [form, setForm] = useState();
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
    if (form.email === "") setError({ error, email: "Email is required" });
    if (form.password === "") setError({ error, password: "Password is required" });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) setError({ error, email: "Ivalid email" });
    if (form.password.length < 8)
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
      <Button variant="contained" color="primary" onClick={handelSubmit}>
        Submit
      </Button>
    </Log>
  );
}

const Log = styled.div``;
export { Login };
