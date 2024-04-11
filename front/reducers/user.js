import { produce } from "immer";

export const initialState = {
  me: [],

  signupLoading: false, // 회원가입 시도중
  signupDone: false,
  signupError: null,

  loginLoading: false, // 로그인 시도중
  loginDone: false,
  loginError: null,

  logoutLoading: false, // 로그아웃 시도중
  logoutDone: false,
  logoutError: null,

  loadUserInfoLoading: false, // 로그아웃 시도중
  loadUserInfoDone: false,
  loadUserInfoError: null,
};

// Action
export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const LOAD_USER_INFO_REQUEST = "LOAD_USER_INFO_REQUEST";
export const LOAD_USER_INFO_SUCCESS = "LOAD_USER_INFO_SUCCESS";
export const LOAD_USER_INFO_FAILURE = "LOAD_USER_INFO_FAILURE";

// reducer : (이전 상태, 액션) => 다음 상태
const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case "SIGNUP_REQUEST": {
        // 회원가입
        draft.signupLoading = true;
        draft.signupDone = false;
        draft.signupError = null;
        break;
      }
      case "SIGNUP_SUCCESS": {
        console.log("회원가입");
        draft.signupLoading = false;
        draft.signupDone = true;
        break;
      }
      case "SIGNUP_FAILURE": {
        draft.signupLoading = false;
        draft.signupDone = false;
        draft.signupError = action.error;
        break;
      }

      case "LOGIN_REQUEST": {
        // 로그인
        draft.loginLoading = true;
        draft.loginDone = false;
        draft.loginError = null;
        break;
      }
      case "LOGIN_SUCCESS": {
        console.log("로그인", action.data);
        draft.loginLoading = false;
        draft.loginDone = true;
        draft.me = action.data;
        break;
      }
      case "LOGIN_FAILURE": {
        draft.loginLoading = false;
        draft.loginDone = false;
        draft.loginError = action.error;
        break;
      }

      case "LOAD_USER_INFO_REQUEST": {
        // 유저정보 가져오기
        draft.loadUserInfoLoading = true;
        draft.loadUserInfoDone = false;
        draft.loadUserInfoError = null;
        break;
      }
      case "LOAD_USER_INFO_SUCCESS": {
        console.log("유저정보", action.data);
        draft.loadUserInfoLoading = false;
        draft.loadUserInfoDone = true;
        draft.me = action.data;
        break;
      }
      case "LOAD_USER_INFO_FAILURE": {
        draft.loadUserInfoLoading = false;
        draft.loadUserInfoDone = false;
        draft.loadUserInfoError = action.error;
        break;
      }

      default:
        break;
    }
  });
};

export default reducer;
