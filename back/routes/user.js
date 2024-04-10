const express = require("express");
const bcrypt = require("bcrypt");
const { User } = require("../models");

const router = express.Router();

// POST user/signup
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

module.exports = router;
