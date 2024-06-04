import { produce } from "immer";

const STUDYNOTE = "StudyNote";
const TIL = "Til";
const PORTFOLIO = "Portfolio";

export const initialState = {
  mainPosts: [],
  StudyNote: [],
  Til: [],
  Portfolio: [],
  imagePath: [],

  addPostLoading: false, // 게시글 작성 시도중
  addPostDone: false,
  addPostError: null,

  loadHomePostsLoading: false, // home 게시글 로드 시도중
  loadHomePostsDone: false,
  loadHomePostsError: null,

  loadMenuPostsLoading: false, // 메뉴별 게시글 로드 시도중
  loadMenuPostsDone: false,
  loadMenuPostsError: null,

  uploadImagesLoading: false, // 이미지 업로드 시도중
  uploadImagesDone: false,
  uploadImagesError: null,
};

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const LOAD_HOME_POSTS_REQUEST = "LOAD_HOME_POSTS_REQUEST";
export const LOAD_HOME_POSTS_SUCCESS = "LOAD_HOME_POSTS_SUCCESS";
export const LOAD_HOME_POSTS_FAILURE = "LOAD_HOME_POSTS_FAILURE";

export const LOAD_MENU_POSTS_REQUEST = "LOAD_MENU_POSTS_REQUEST";
export const LOAD_MENU_POSTS_SUCCESS = "LOAD_MENU_POSTS_SUCCESS";
export const LOAD_MENU_POSTS_FAILURE = "LOAD_MENU_POSTS_FAILURE";

export const UPLOAD_IMAGES_REQUEST = "UPLOAD_IMAGES_REQUEST";
export const UPLOAD_IMAGES_SUCCESS = "UPLOAD_IMAGES_SUCCESS";
export const UPLOAD_IMAGES_FAILURE = "UPLOAD_IMAGES_FAILURE";
export const REMOVE_IMAGE = "REMOVE_IMAGE";

// reducer
const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case "ADD_POST_REQUEST": {
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;
      }
      case "ADD_POST_SUCCESS": {
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.mainPosts.unshift(action.data);
        break;
      }
      case "ADD_POST_FAILURE": {
        draft.addPostLoading = false;
        draft.addPostDone = false;
        draft.addPostError = action.error;
        break;
      }

      case "LOAD_MENU_POSTS_REQUEST": {
        draft.loadMenuPostsLoading = true;
        draft.loadMenuPostsDone = false;
        draft.loadMenuPostsError = null;
        break;
      }
      case "LOAD_MENU_POSTS_SUCCESS": {
        draft.loadMenuPostsLoading = false;
        draft.loadMenuPostsDone = true;
        if (action.data.category === STUDYNOTE) {
          draft.StudyNote.unshift(action.data.post);
        } else if (action.data.category === PORTFOLIO) {
          draft.Portfolio.unshift(action.data.post);
        } else if (action.data.category === TIL) {
          draft.Til.unshift(action.data.post);
        }
        break;
      }
      case "LOAD_MENU_POSTS_FAILURE": {
        draft.loadMenuPostsLoading = false;
        draft.loadMenuPostsDone = false;
        draft.loadMenuPostsError = action.error;
        break;
      }

      case "LOAD_HOME_POSTS_REQUEST": {
        draft.loadHomePostsLoading = true;
        draft.loadHomePostsDone = false;
        draft.loadHomePostsError = null;
        break;
      }
      case "LOAD_HOME_POSTS_SUCCESS": {
        draft.loadHomePostsLoading = false;
        draft.loadHomePostsDone = true;
        draft.mainPosts.unshift(action.data);
        break;
      }
      case "LOAD_HOME_POSTS_FAILURE": {
        draft.loadHomePostsLoading = false;
        draft.loadHomePostsDone = false;
        draft.loadHomePostsError = action.error;
        break;
      }

      case "UPLOAD_IMAGES_REQUEST": {
        draft.uploadImagesLoading = true;
        draft.uploadImagesDone = false;
        draft.uploadImagesError = null;
        break;
      }
      case "UPLOAD_IMAGES_SUCCESS": {
        draft.uploadImagesLoading = false;
        draft.uploadImagesDone = true;
        draft.imagePath.unshift(...action.data);
        break;
      }
      case "UPLOAD_IMAGES_FAILURE": {
        draft.uploadImagesLoading = false;
        draft.uploadImagesDone = false;
        draft.uploadImagesError = action.error;
        break;
      }
      case "REMOVE_IMAGE": {
        console.log("redux-remove image", action.data);
        draft.imagePath = draft.imagePath.filter((v, i) => i !== action.data);
        break;
        break;
      }

      default:
        return state;
    }
  });
};

export default reducer;
