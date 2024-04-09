const express = require("express");
const cors = require("cors");
const db = require("./models");
const app = express();

const postRouter = require("./routes/post");

db.sequelize
  .sync()
  .then(() => {
    console.log("db연결 성공");
  })
  .catch((error) => {
    console.error(error);
  });

// use 안에 들어가는 것들 => 미들웨어
app.use(
  cors({
    origin: "http://localhost:3000", // CORS 도메인허용 Access-Control-Allow-Origin
    credentials: true, // 쿠키허용 Access-Control-Allow-credentials
  })
);

app.use(express.json());

app.use("/post", postRouter);

app.listen(3065, () => {
  console.log("서버 실행중 >_<");
});
