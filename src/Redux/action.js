import {
  SETCURRENTCHAT,
  GETCHATROOMS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  UPDATE_PROFILE,
  SETCURRENTCHATMESSAGES,
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
  //console.log(payload);
  axios
    .post("https://herokuwhatsapp86044.herokuapp.com/login", payload)
    .then((res) => {
      dispatch(loginSuccess(res.data));
    })
    .catch((err) => {
      console.log("err:", err);

      dispatch(loginFailure(err));
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
    .post("https://herokuwhatsapp86044.herokuapp.com/register", payload)
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
    .post("https://herokuwhatsapp86044.herokuapp.com/googleLogin", payload)
    .then((res) => {
      dispatch(registerSuccess(res.data));
    })
    .catch((err) => {
      dispatch(registerFailure(err.response.data));
    });
};

//...............................//...............................

const getChatSuccess = (payload) => {
  return {
    type: GETCHATROOMS,
    payload,
  };
};

const getChatRooms = (payload) => (dispatch) => {
  axios
    .get(`https://herokuwhatsapp86044.herokuapp.com/chatrooms/${payload}`)
    .then((res) => {
      //console.log("chatroomrs res:", res.data.chatRoom);

      dispatch(getChatSuccess(res.data.chatRoom));
    })
    .catch((err) => {
      console.log("err:", err);
    });
};

const setCurrentChat = (payload) => {
  return {
    type: SETCURRENTCHAT,
    payload,
  };
};

const setCurrentChatMessages = (payload) => {
  return {
    type: SETCURRENTCHATMESSAGES,
    payload,
  };
};

const setCurrentChatAll = (payload) => (dispatch) => {
  dispatch(setCurrentChat(payload));
  axios
    .get(`https://herokuwhatsapp86044.herokuapp.com/messages/${payload._id}`)
    .then((res) => {
      //console.log(res.data, "setCurrnetAll");
      dispatch(setCurrentChatMessages(res.data.message));
    })
    .catch((err) => {
      console.log(err);
    });
};

export {
  loginUser,
  registerUser,
  updateProfile,
  logOut,
  googleSignUp,
  getChatRooms,
  setCurrentChatAll,
  setCurrentChatMessages,
};
