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
  LOAD_HOME_POSTS_REQUEST,
  LOAD_HOME_POSTS_SUCCESS,
  LOAD_HOME_POSTS_FAILURE,
  LOAD_MENU_POSTS_REQUEST,
  LOAD_MENU_POSTS_SUCCESS,
  LOAD_MENU_POSTS_FAILURE,
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

function loadHomePostsAPI() {
  return axios.get("/posts");
}
function* loadHomePosts() {
  try {
    const result = yield call(loadHomePostsAPI);
    yield put({
      type: LOAD_HOME_POSTS_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: LOAD_HOME_POSTS_FAILURE,
      error: error.response.data,
    });
  }
}

function loadMenuPostsAPI(category) {
  return axios.get(`/post/menu?category=${category}`);
}
function* loadMenuPosts(action) {
  try {
    const result = yield call(loadMenuPostsAPI, action.category);
    yield put({
      type: LOAD_MENU_POSTS_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    console.error("사가실패", error);
    yield put({
      type: LOAD_MENU_POSTS_FAILURE,
      error: error.response.data,
    });
  }
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}
function* watchLoadHomePosts() {
  yield takeLatest(LOAD_HOME_POSTS_REQUEST, loadHomePosts);
}
function* watchLoadMenuPosts() {
  yield takeLatest(LOAD_MENU_POSTS_REQUEST, loadMenuPosts);
}

export default function* postSaga() {
  yield all([
    fork(watchAddPost),
    fork(watchLoadHomePosts),
    fork(watchLoadMenuPosts),
  ]);
}
