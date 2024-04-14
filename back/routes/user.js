const express = require("express");
const bcrypt = require("bcrypt");
const passport = require("passport");
const { User, Post } = require("../models");
const { where } = require("sequelize");

const router = express.Router();

// POST /user/signup
router.post("/signup", async (req, res, next) => {
  try {
    const checkUser = await User.findOne({
      where: { email: req.body.email },
    });
    if (checkUser) return res.status(403).send("이미 사용중인 이메일입니다");

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    await User.create({
      email: req.body.email,
      password: hashedPassword,
      nickname: req.body.nickname,
    });

    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.status(201).send("signup OK");
  } catch (error) {
    console.error("회원가입 서버에러", error);
    next(error);
  }
});

// POST /user/login
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (serverError, user, clientError) => {
    if (serverError) {
      return next(serverError);
    }
    if (clientError) {
      return res.status(401).send(clientError.reason);
    }

    // passport 로그인 메서드 , session에 로그인 정보 저장
    return req.login(user, async (loginError) => {
      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }
      const fullUserWithoutPassword = await User.findOne({
        where: { id: user.id },
        attributes: {
          exclude: ["password"],
        },
        include: [
          {
            model: Post,
            attributes: ["id"],
          },
        ],
      });
      console.log("서버 - 로그인성공", fullUserWithoutPassword);
      return res.status(200).json(fullUserWithoutPassword);
    });
  })(req, res, next);
});

// GET /user
router.get("/", async (req, res, next) => {
  console.log("서버 req.user", req.user);
  try {
    // 로그인 한 이후에만 req.user에 데이터가 있으므로
    if (req.user) {
      const user = await User.findOne({
        where: req.user.id,
        attributes: {
          exclude: ["password"],
        },
        include: [
          {
            model: Post,
            attributes: ["id"],
          },
        ],
      });
      res.status(200).json(user);
    } else res.status(200).json(null);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
