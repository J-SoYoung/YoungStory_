// post
export const dummydata = [
  {
    postId: 1,
    user: "thdud",
    title: "제목입니다1111",
    img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    description: `## Redux 기본세팅 next-redux-wrapper : next에서 redux를 쉽게 사용할 수 있게 도와주는 라이브러리  (1) store폴더 생성 , reducer를 사용할 기본 세팅을 해줌   reducer, middlewares , DevTools사용할 수 있게 설정하는 곳      // configureStore.js      import { createWrapper } from "next-redux-wrapper";      import { applyMiddleware, compose, createStore } from "redux";      import { composeWithDevTools } from "redux-devtools-extension";
      
      import reducer from "../reducers/index";
      
      const configureStore = () => {
        const middlewares = [];
        
        // devtools연동(개발로그), 보안상의 이유로 개발/제품 버전 따로 생성
        const enhancer =
          process.env.NODE_ENV === "production"
            ? compose(applyMiddleware(...middlewares))
            : compose(composeWithDevTools(...middlewares));
            
        const store = createStore(reducer, enhancer);
        return store;
      };
      
      const wrapper = createWrapper(configureStore, {
        debug: process.env.NODE_ENV === "development",
      });
      export default wrapper;
      
      (2) reducers폴더 생성 
      데이터를 저장할 중앙 저장관리소 폴더 생성한다. 각 테마? 데이터별로 관리할 reducer를 생성 
      오늘은 user, post생성함 / 기본 reducer에는 combineReducers를 통해 나눠져있는 user,post의 reducer를 통합
      
      - reducer.js

      const initialState = {};
      
      const reducer = (state = initialState, action) => {
        switch (action.type) {
          case "CREATE": {
            return state;
          }
          default:
            return state;
        }
      };
      
      export default reducer;
      
      - combineReducers

          reducer를 분리한 후, 하나로 합쳐줘야 한다. combineReducers를 사용해 여러개의 reducer함수를 합한다. 
          jsx
          import { HYDRATE } from "next-redux-wrapper";
          import user from "./user";
          import post from "./post";
          import { combineReducers } from "redux";
          
          // 비동기 액션 함수
          
          // 액션 함수
          
          // (이전상태, 액션) => 다음상태
          const rootReducer = combineReducers({
            index: (state = {}, action) => {
              switch (action.type) {
                case "HYDRATE":
                  console.log(HYDRATE);
                  return { ...state, ...action.payload };
                default:
                  return state;
              }
            },
            user,
            post,
          });
          
          export default rootReducer;
      
      ## Redux 동작원리
      
     `,
    createAt: new Date().toISOString().split("T")[0],
    comments: [
      {
        user: "thdud2",
        contents:
          "하dddd ddddddddddd dddddd dddddddddddddd dddddddddddddd dddddddddd dddddddddddd ddddddd이큐",
      },
      {
        user: "thdud11",
        contents:
          "오dddddd dddddddddddddd ddddddddddd dddd dddddddddd dddddddd dddddd dddddddddddddddd ddddd dddd늘 파묘",
      }, 
    ],
  },
  {
    postId: 2,
    user: "thdud",
    title: "제목입니다2222",
    img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    description:
      "222Card contenCard contenCard contenCard contenCard contenCard contenCard contenCard contenCard contenCard content contenCard contenCa contenCard content contenCard contddddddddddenCard contenCard contenCard contenCard contenCaontenCaontenCard contenCard contenCard contenCaontenCaontenCard contenCard contenCar",
    createAt: new Date().toISOString().split("T")[0],
    comments: [
      {
        user: "thdud2",
        contents: "하이큐dddd",
      },
      {
        user: "thdud2",
        contents: "하이큐dddd",
      },
      {
        user: "thdud2",
        contents: "오늘파묘ddddd",
      },
    ],
  },
  {
    postId: 3,
    user: "thdud",
    title: "제목입니다3333",
    img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    description:
      "요약본입니다3333Card contenCard contenCard contenCard contenCard contenCard contenCard contenCard contenCard contenCard content contenCard contenCa contenCard content contenCard contenCard contenCard contenCard contenCard contenCaontenCaontenCard contenCard contenCard contenCaontenCaontenCard contenCard contenCar",
    createAt: new Date().toISOString().split("T")[0],
    comments: [
      {
        user: "thdud2",
        contents: "하이큐",
      },
    ],
  },
  {
    postId: 4,
    user: "thdud",
    title: "제목입니다4444",
    img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    description:
      "요약본입니다4444ard contenCard contenCard contenCard contenCard contenCard contenCard contenCard contenCard contenCard content contenCard contenCa contenCard content contenCard contenCard contenCard contenCard contenCard contenCaontenCaontenCard contenCard contenCard contenCaontenCaontenCard contenCard contenCar",
    createAt: new Date().toISOString().split("T")[0],
    comments: [
      {
        user: "thdud2",
        contents: "하이큐",
      },
      {
        user: "thdud2",
        contents: "하이큐",
      },
      {
        user: "thdud2",
        contents: "하이큐",
      },
      {
        user: "thdud2",
        contents: "하이큐",
      },
    ],
  },
];
