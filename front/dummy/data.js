import shortid from "shortid";
import { Faker } from "@faker-js/faker";

// post
export const dummydata = [
  {
    postId: shortid.generate(),
    User: { username: "thdud", id: shortid },
    title: "제목입니다1111",
    img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    description: `## Redux 기본세팅 next-redux-wrapper : next에서 redux를 쉽게 사용할 수 있게 도와주는 라이브러리  (1) store폴더 생성 , reducer를 사용할 기본 세팅을 해줌   reducer, middlewares , DevTools사용할 수 있게 설정하는 곳      // configureStore.js      import { createWrapper } from "next-redux-wrapper";      import { applyMiddleware, compose, createStore } from "redux";      import { composeWithDevTools } from "redux-devtools-extension";      
     `,
    categories: "study-note",
    createAt: new Date().toISOString().split("T")[0],
    Comments: [],
  },
];
