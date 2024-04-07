import { faker } from "@faker-js/faker";
import shortid from "shortid";

export const initialState = {
  mainPosts: [
    {
      postId: 1,
      User: { username: "thdud", id: shortid },
      title: "제목입니다1111",
      categories: "study-note",
      img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      description:
        "ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
      createAt: new Date().toISOString().split("T")[0],
      Comments: [
        {
          User: { username: "thdud2", id: shortid },
          contents: "후후 나는 들어간다 TOSS에",
        },
        {
          User: { username: "thdud2", id: shortid },
          contents: "오dddddd",
        },
      ],
    },
  ],
};

const ADD_POST = "ADD_POST";

export const addPost = (data) => {
  return {
    type: ADD_POST,
    data: data,
  };
};

const dummyPost = {
  postId: 3,
  User: { username: "thdud2", id: shortid },
  title: "추가합니다",
  categories: "study-note",
  img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  description: "추가하는 데이터입니다. 후후우후우 빨리 DB연결해서 추가하자",
  createAt: new Date().toISOString().split("T")[0],
  Comments: [
    {
      User: { username: "thdud2", id: shortid },
      contents: "카우스 스시를 시킬까말까",
    },
    {
      User: { username: "thdud2", id: shortid },
      contents: "먹고싶은데 먹고 싶지않다 동시에 드는 생각",
    },
  ],
};

// async Action

// Action

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POST": {
      console.log("postaction-", action);
      return {
        ...state,
        mainPosts: [action.data, ...state.mainPosts],
      };
    }
    default:
      return state;
  }
};

export default reducer;
