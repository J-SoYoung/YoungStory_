import axios from "axios";
import {
  all,
  call,
  delay,
  fork,
  put,
  takeLatest,
  throttle,
} from "redux-saga/effects";
import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOAD_USER_INFO_REQUEST,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from "../reducers/user";

function signupAPI(data) {
  return axios.post("/user/signup", data);
}
function* signup(action) {
  try {
    const result = yield call(signupAPI, action.data);
    // yield delay(1000);
    yield put({
      type: SIGNUP_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: SIGNUP_FAILURE,
      error: error.response.data,
    });
  }
}

function loginAPI(data) {
  return axios.post("/user/login", data);
}
function* login(action) {
  try {
    const result = yield call(loginAPI, action.data);
    yield put({
      type: LOGIN_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: LOGIN_FAILURE,
      error: error.response.data,
    });
  }
}

function logoutAPI() {
  return axios.post("/user/logout");
}
function* logout() {
  try {
    const result = yield call(logoutAPI);
    yield put({
      type: LOGOUT_SUCCESS,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: LOGOUT_FAILURE,
      error: error.response.data,
    });
  }
}

function loadUserInfoAPI() {
  return axios.get("/user");
}
function* loadUserInfo(action) {
  try {
    const result = yield call(loadUserInfoAPI, action.data);
    // yield delay(1000);
    yield put({
      type: LOGIN_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: LOGIN_FAILURE,
      error: error.response.data,
    });
  }
}

function* watchSignup() {
  yield takeLatest(SIGNUP_REQUEST, signup);
}
function* watchLogin() {
  yield takeLatest(LOGIN_REQUEST, login);
}
function* watchLogout() {
  yield takeLatest(LOGOUT_REQUEST, logout);
}
function* watchLoadUserInfo() {
  yield takeLatest(LOAD_USER_INFO_REQUEST, loadUserInfo);
}

export default function* userSaga() {
  yield all([
    fork(watchSignup),
    fork(watchLogin),
    fork(watchLogout),
    fork(watchLoadUserInfo),
  ]);
}
