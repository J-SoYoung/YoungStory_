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
  ADD_POST_REQUEST,
  ADD_POST_FAILURE,
  ADD_POST_SUCCESS,
  LOAD_MENUPOSTS_REQUEST,
  LOAD_MENUPOSTS_SUCCESS,
  LOAD_MENUPOSTS_FAILURE,
} from "../reducers/post";

function addPostAPI(data) {
  return axios.post("/post", data);
}
function* addPost(action) {
  try {
    const result = yield call(addPostAPI, action.data);
    console.log("사가성공", result);
    yield put({
      type: ADD_POST_SUCCESS,
      data: action.data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: ADD_POST_FAILURE,
      error: error.response.data,
    });
  }
}

function loadMenuPostsAPI(categories) {
  // return axios.get(`/posts?categories=${categories}`, data);
}
function* loadMenuPosts(action) {
  console.log("사가", action);
  try {
    console.log("사가성공", action);
    // const result = yield call(loadMenuPostsAPI, action.categories);
    yield delay(1000);
    yield put({
      type: LOAD_MENUPOSTS_SUCCESS,
      // data: action.data,
    });
  } catch (error) {
    console.error("사가실패", error);
    yield put({
      type: LOAD_MENUPOSTS_FAILURE,
      error: error.response.data,
    });
  }
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}
function* watchLoadMenuPosts() {
  yield takeLatest(LOAD_MENUPOSTS_REQUEST, loadMenuPosts);
}

export default function* postSaga() {
  yield all([fork(watchAddPost), fork(watchLoadMenuPosts)]);
}
