const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const cors = require("cors");
const dotenv = require("dotenv");
const passport = require("passport");
const path = require("path");

const db = require("./models");
const passportCofig = require("./passport");
const postRouter = require("./routes/post");
const postsRouter = require("./routes/posts");
const userRouter = require("./routes/user");

const app = express();
app.use(morgan("dev"));
passportCofig();
dotenv.config();

db.sequelize
  .sync()
  .then(() => {
    console.log("db연결 성공");
  })
  .catch((error) => {
    console.error(error);
  });

app.use(
  cors({
    origin: "http://localhost:3000", // CORS 도메인허용 Access-Control-Allow-Origin
    credentials: true, // 쿠키허용 Access-Control-Allow-credentials
  })
);
app.use(express.json());

// front에서도 서버의 폴더 접근할 수 있도록 설정 ( image 미리보기 때문 )
app.use("/", express.static(path.join(__dirname, "uploads")));

// 프론트에서 받은 데이터를 req.body에 넣음, 일반 form데이터 받을 때
app.use(express.urlencoded({ extended: true }));

// session, cookie
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// router
app.use("/post", postRouter);
app.use("/posts", postsRouter);
app.use("/user", userRouter);

app.listen(3065, () => {
  console.log("서버 실행중 >_<");
});
