import { faker } from "@faker-js/faker";
import shortid from "shortid";
import { produce } from "immer";

export const initialState = {
  mainPosts: [
    {
      postId: 1,
      User: { username: "thdud", id: 1 },
      title: "제목입니다1111",
      categories: "studyNote",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      Comments: [],
      img: null,
    },
  ],

  addPostLoading: false, // 게시글 작성 시도중
  addPostDone: false,
  addPostError: null,
};

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

const dummyPost = {
  postId: 2,
  User: { username: "thdud2", id: 2 },
  title: "추가합니다",
  categories: "studyNote",
  content:
    "추가하는 데이터입니다. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  createAt: new Date().toISOString().split("T")[0],
  Comments: [],
  img: null,
};

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
        draft.mainPosts.unshift(action.data);
        draft.addPostLoading = false;
        draft.addPostDone = true;
        break;
      }
      case "ADD_POST_FAILURE": {
        draft.addPostLoading = false;
        draft.addPostDone = false;
        draft.addPostError = action.error;
        break;
      }
      default:
        return state;
    }
  });
};

export default reducer;
