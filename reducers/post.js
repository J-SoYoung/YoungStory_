export const initialState = {
  mainPosts: [
    {
      postId: 1,
      username: "thdud",
      title: "제목입니다1111",
      categories: "study-note",
      img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      description:
        "ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
      createAt: new Date().toISOString().split("T")[0],
      comments: [
        {
          user: "thdud2",
          contents: "후후 나는 들어간다 TOSS에",
        },
        {
          user: "thdud11",
          contents: "오dddddd",
        },
      ],
    },
    {
      postId: 2,
      username: "thdud",
      title: "제목입니다2222",
      categories: "study-note",
      img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      description:
        "dzzzzzzzz z z zzzzzzzz zzzzzz  zzzzzzz zzzzzz 그러니까 말이야",
      createAt: new Date().toISOString().split("T")[0],
      comments: [
        {
          user: "thdud22",
          contents: "가나다 라마다 커밋메세지를 쓰자",
        },
        {
          user: "thdud11",
          contents: "T오늘 TIL은 어떤 내용을 쓸까",
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
  username: "thdud",
  title: "추가합니다",
  categories: "study-note",
  img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  description: "추가하는 데이터입니다. 후후우후우 빨리 DB연결해서 추가하자",
  createAt: new Date().toISOString().split("T")[0],
  comments: [
    {
      user: "thdud2",
      contents: "카우스 스시를 시킬까말까",
    },
    {
      user: "thdud11",
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
        mainPosts: [dummyPost, ...state.mainPosts],
      };
    }
    default:
      return state;
  }
};

export default reducer;
