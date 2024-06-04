const express = require("express");
const { Post, Comment, User, Category, Image } = require("../models");
const router = express.Router();

// HOME 포스트 로드
router.get("/", async (req, res, next) => {
  try {
    // db에서 포스트 찾기
    const StudyNote = await Post.findAll({
      where: { CategoryId: 4 },
      include: [
        { model: Image },
        {
          model: User, // 게시글 작성자
          attributes: ["id", "nickname"],
        },
      ],
      order: [["createdAt", "DESC"]], // createdAt 열을 기준으로 내림차순 정렬
      limit: 5, // 최대 5개 레코드 로드
    });
    const Portfolio = await Post.findAll({
      where: { CategoryId: 5 },
      include: [
        { model: Image },
        {
          model: User, // 게시글 작성자
          attributes: ["id", "nickname"],
        },
      ],
      order: [["createdAt", "DESC"]],
      limit: 2,
    });
    const post = { StudyNote, Portfolio };

    return res.status(201).json(post);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
