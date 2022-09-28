import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  RESET_LOGIN_ERROR,
  LOGOUT,
} from "./constants";

const initialState = {
  userId: "",
  loggedIn: false,
  isError: "",
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        userId: action.value,
        loggedIn: true,
      };
    case LOGIN_ERROR: {
      return {
        ...state,
        isError: action.error,
      };
    }
    case RESET_LOGIN_ERROR:
      return {
        ...state,
        isError: "",
      };
    case LOGOUT:
      return {
        ...state,
        userId: "",
        loggedIn: false,
      };
    default:
      return state;
  }
};

export default LoginReducer;
