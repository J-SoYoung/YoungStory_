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
} from "../reducers/user";

function signupAPI(data) {
  return axios.post("/user/signup", data);
}
function* signup(action) {
  try {
    console.log("회원가입사가", action);
    const result = yield call(signupAPI, action.data);
    // yield delay(1000);
    yield put({
      type: SIGNUP_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    console.error("회원가입 saga실패", error);
    yield put({
      type: SIGNUP_FAILURE,
      error: error.response.data,
    });
  }
}
function* watchSignup() {
  yield takeLatest(SIGNUP_REQUEST, signup);
}

export default function* userSaga() {
  yield all([fork(watchSignup)]);
}
