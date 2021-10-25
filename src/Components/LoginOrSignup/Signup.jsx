import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import { registerUser } from "../../Redux/action";
function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    name: false,
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
    if (form?.email === "" && form?.password === "" && form.name === "")
      setError({ email: "Email is required", password: "Password is required" });
    else if (form?.name === "") setError({ error, name: "Name is required" });
    else if (form?.email === "") setError({ error, email: "Email is required" });
    else if (form?.password === "") setError({ error, password: "Password is required" });
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form?.email))
      setError({ error, email: "Invalid email" });
  };

  const handelSubmit = (e) => {
    validateLogin();
    if (error.email === false && error.password === false && error.name === false) {
      console.log("1");
      dispatch(registerUser(form));
    }
  };

  return (
    <Sin>
      <div>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          onKeyUp={onEnter}
          name="name"
          required
          error={error.name}
          helperText={error.name}
        />
      </div>
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
          type="password"
          variant="outlined"
          onKeyUp={onEnter}
          name="password"
          required
          error={error.password}
          helperText={error.password}
        />
      </div>
      <div className="signSubmit">
        <Button variant="contained" color="primary" onClick={handelSubmit}>
          Signup
        </Button>
      </div>
    </Sin>
  );
}

const Sin = styled.div`
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

  .signSubmit {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }
  .signSubmit .MuiButton-containedPrimary {
    border-radius: 50px;
    background-color: #189d0e;
  }
`;
export { Signup };
