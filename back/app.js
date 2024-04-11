const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const cors = require("cors");
const dotenv = require("dotenv");
const passport = require("passport");

const db = require("./models");
const passportCofig = require("./passport");
const postRouter = require("./routes/post");
const userRouter = require("./routes/user");

const app = express();
app.use(morgan('dev'))
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
app.use("/user", userRouter);

app.listen(3065, () => {
  console.log("서버 실행중 >_<");
});
