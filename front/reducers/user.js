import { produce } from "immer";

const dummyUser = {
  id: 1,
  username: "thdud",
  posts: [],
  followings: [],
  followers: [],
};

export const initialState = {
  isLoggedIn: false,
  me: dummyUser,

  signupLoading: false, // 회원가입 시도중
  signupDone: false,
  signupError: null,

  loginLoading: false, // 로그인 시도중
  loginDone: false,
  loginError: null,

  logoutLoading: false, // 로그아웃 시도중
  logoutDone: false,
  logoutError: null,
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

export const loginAction = (data) => {
  return {
    type: "LOGIN_REQUEST",
    data: data,
  };
};
export const logoutAction = () => {
  return {
    type: "LOGOUT_REQUEST",
  };
};

// reducer : (이전 상태, 액션) => 다음 상태
const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case "SIGNUP_REQUEST": {
        draft.signupLoading = true;
        draft.signupDone = false;
        draft.signupError = null;
        break;
      }
      case "SIGNUP_SUCCESS": {
        console.log("회원가입 리듀서", action.data);
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

      default:
        break;
    }
  });
};

export default reducer;
