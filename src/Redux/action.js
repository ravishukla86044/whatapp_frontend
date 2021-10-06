import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  UPDATE_PROFILE,
} from "./actionType";
import axios from "axios";

//....................updateProfile......................//
const updateProfile = (payload) => {
  return {
    type: UPDATE_PROFILE,
    payload,
  };
};

//..........................................Login.................................//
const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};
const loginSuccess = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};

const loginFailure = (payload) => {
  return {
    type: LOGIN_FAILURE,
    payload,
  };
};

const logOut = () => {
  return {
    type: LOGOUT,
  };
};

const loginUser = (payload) => (dispatch) => {
  dispatch(loginRequest());
  axios
    .post("http://http://localhost:3001/login", payload)
    .then((res) => {
      console.log("res:", res);

      dispatch(loginSuccess(res.data));
    })
    .catch((err) => {
      console.log("err:", err.response.data);

      dispatch(loginFailure(err.response.data));
    });
};

//..........................Register.................................//

const registerRequest = () => {
  return {
    type: REGISTER_REQUEST,
  };
};

const registerSuccess = (payload) => {
  return {
    type: REGISTER_SUCCESS,
    payload,
  };
};

const registerFailure = (payload) => {
  return {
    type: REGISTER_FAILURE,
    payload,
  };
};

const registerUser = (payload) => (dispatch) => {
  dispatch(registerRequest());
  axios
    .post("http://localhost:3001/register", payload)
    .then((res) => {
      dispatch(registerSuccess(res.data));
    })
    .catch((err) => {
      dispatch(registerFailure(err.response.data));
    });
};

const googleSignUp = (payload) => (dispatch) => {
  dispatch(registerRequest());
  axios
    .post("http://localhost:3001/googlesignup", payload)
    .then((res) => {
      dispatch(registerSuccess(res.data));
    })
    .catch((err) => {
      dispatch(registerFailure(err.response.data));
    });
};

export { loginUser, registerUser, updateProfile, logOut, googleSignUp };
