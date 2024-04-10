import { produce } from "immer";

export const initialState = {
  mainPosts: [
    {
      postId: 1,
      User: { username: "thdud", id: 1 },
      title: "제목입니다11-11",
      categories: "studyNote",
      content:
        "studyNote -- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      Comments: [],
      img: null,
    },
    {
      postId: 1,
      User: { username: "thdud", id: 1 },
      title: "제목입니다11-33",
      categories: "studyNote",
      content:
        "studyNote -- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      Comments: [],
      img: null,
    },
    {
      postId: 1,
      User: { username: "thdud", id: 1 },
      title: "제목입니다11-44",
      categories: "studyNote",
      content:
        "studyNote -- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      Comments: [],
      img: null,
    },
    {
      postId: 1,
      User: { username: "thdud", id: 1 },
      title: "제목입니다11-22",
      categories: "studyNote",
      content:
        "studyNote -- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      Comments: [],
      img: null,
    },
    {
      postId: 1,
      User: { username: "thdud", id: 1 },
      title: "제목입니다22-11",
      categories: "portfolio",
      content:
        "portfolio -- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      Comments: [],
      img: null,
    },
    {
      postId: 1,
      User: { username: "thdud", id: 1 },
      title: "제목입니다22-22",
      categories: "portfolio",
      content:
        "portfolio -- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      Comments: [],
      img: null,
    },
    {
      postId: 1,
      User: { username: "thdud", id: 1 },
      title: "2024-01-01",
      categories: "til",
      content:
        "til -- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      Comments: [],
      img: null,
    },
    {
      postId: 1,
      User: { username: "thdud", id: 1 },
      title: "2024-03-02",
      categories: "til",
      content:
        "til -- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      Comments: [],
      img: null,
    },
    {
      postId: 1,
      User: { username: "thdud", id: 1 },
      title: "2024-03-03",
      categories: "til",
      content:
        "til -- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      Comments: [],
      img: null,
    },
    {
      postId: 1,
      User: { username: "thdud", id: 1 },
      title: "2024-03-01",
      categories: "til",
      content:
        "til -- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      Comments: [],
      img: null,
    },
  ],

  addPostLoading: false, // 게시글 작성 시도중
  addPostDone: false,
  addPostError: null,

  loadMenuPostsLoading: false, // 메뉴별 게시글 로드 시도중
  loadMenuPostsDone: false,
  loadMenuPostsError: null,

};

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const LOAD_MENUPOSTS_REQUEST = "LOAD_MENUPOSTS_REQUEST";
export const LOAD_MENUPOSTS_SUCCESS = "LOAD_MENUPOSTS_SUCCESS";
export const LOAD_MENUPOSTS_FAILURE = "LOAD_MENUPOSTS_FAILURE";


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

      case "LOAD_MENUPOSTS_REQUEST": {
        draft.loadMenuPostsLoading = true;
        draft.loadMenuPostsDone = false;
        draft.loadMenuPostsError = null;
        break;
      }
      case "LOAD_MENUPOSTS_SUCCESS": {
        draft.mainPosts.push(...action.data);
        draft.loadMenuPostsLoading = false;
        draft.loadMenuPostsDone = true;
        break;
      }
      case "LOAD_MENUPOSTS_FAILURE": {
        draft.loadMenuPostsLoading = false;
        draft.loadMenuPostsDone = false;
        draft.loadMenuPostsError = action.error;
        break;
      }

      default:
        return state;
    }
  });
};

export default reducer;
