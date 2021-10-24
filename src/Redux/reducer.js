import {
  GETCHATROOMS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  SETCURRENTCHAT,
  SETCURRENTCHATMESSAGES,
  UPDATE_PROFILE,
} from "./actionType";

const token = false;
const user = false;

const initState = {
  isAuth: token ? true : false,
  user: user || "",
  token: token || "",
  isLoading: false,
  isError: false,
  errMsg: "",
  isLight: true,
  chatRoom: [],
  currentChatRoom: "",
  currentChatMessages: [],
};

const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case LOGIN_SUCCESS: {
      //   saveData("token", payload.token);

      return {
        ...state,
        isAuth: true,
        user: payload.user,
        token: payload.token,
        isLoading: false,
        isError: false,
        errMsg: "",
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        isAuth: false,
        token: "",
        isLoading: false,
        isError: true,
        errMsg: payload.message,
      };
    }
    case REGISTER_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case REGISTER_SUCCESS: {
      //   saveData("token", payload.token);
      //   saveData("user", payload.user);
      return {
        ...state,
        isAuth: true,
        user: payload.user,
        token: payload.token,
        isLoading: false,
        isError: false,
        errMsg: "",
      };
    }
    case REGISTER_FAILURE: {
      return {
        ...state,
        isAuth: false,
        token: "",
        isLoading: false,
        isError: true,
        errMsg: payload.message,
      };
    }
    case UPDATE_PROFILE: {
      //   saveData("user", payload);
      return {
        ...state,
        user: payload,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        isAuth: false,
        user: "",
        token: "",
      };
    }

    case GETCHATROOMS: {
      return {
        ...state,
        chatRoom: payload,
      };
    }
    case SETCURRENTCHAT: {
      return {
        ...state,
        currentChatRoom: payload,
      };
    }
    case SETCURRENTCHATMESSAGES: {
      return {
        ...state,
        currentChatMessages: payload,
      };
    }
    default:
      return state;
  }
};

export { authReducer };
