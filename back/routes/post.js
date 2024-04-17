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

// MENU 포스트 로드
router.get("/menu", async (req, res, next) => {
  const category = req.query.category;
  try {
    // req.query에서 받아온 카테고리로 카테고리 테이블에서 category id를 찾는다
    // 위에서 찾은 id로 Post에서 해당 post를 모두 찾는다
    const categoryId = await Category.findOne({
      where: { name: req.query.category },
    });
    const post = await Post.findAll({
      where: { CategoryId: categoryId.id },
      order: [["createdAt", "DESC"]],
      limit: 10, // 최대 10개 레코드 로드
      include: [
        {
          model: User, // 게시글 작성자
          attributes: ["id", "nickname"],
        },
      ],
    });
    res.status(201).json((result = { post, category }));
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
