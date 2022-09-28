import {
  DISPATCH_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  RESET_LOGIN_ERROR,
  LOGOUT,
} from "./constants";

export function dispatch_login(username, password) {
  return {
    type: DISPATCH_LOGIN,
    username,
    password,
  };
}

export function login_success(value) {
  return {
    type: LOGIN_SUCCESS,
    value,
  };
}
export function login_error(error) {
  return {
    type: LOGIN_ERROR,
    error,
  };
}

export function reset_login_error() {
  return {
    type: RESET_LOGIN_ERROR,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}
