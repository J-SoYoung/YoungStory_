const express = require("express");
const { Post, Comment, User, Category, Image } = require("../models");
const hashtag = require("../models/hashtag");
const category = require("../models/category");
const router = express.Router();

// 포스트 작성
router.post("/", async (req, res, next) => {
  console.log("서버 포스트데이터-", req.body);
  try {
    const category = req.body.category;
    let categoryId;
    if (category) {
      const [savedCategory, created] = await Category.findOrCreate({
        where: { name: category },
      });
      categoryId = savedCategory.id;
    }

    const post = await Post.create({
      UserId: req.user.id,
      title: req.body.title,
      // img: null,
      content: req.body.content,
      category: req.body.category,
      CategoryId: categoryId,
    });

    res.status(201).json(post);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 포스트 로드
router.get("/", async (req, res, next) => {
  try {
    // db에서 포스트 찾기
    let studyNote = await Post.findAll({
      where: { CategoryId: 4 },
      order: [["createdAt", "DESC"]], // createdAt 열을 기준으로 내림차순 정렬
      limit: 5, // 최대 5개 레코드 로드
    });
    let portfolio = await Post.findAll({
      where: { CategoryId: 5 },
      order: [["createdAt", "DESC"]],
      limit: 2,
    });

    const post = { studyNote, portfolio };
    res.status(201).json(post);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
