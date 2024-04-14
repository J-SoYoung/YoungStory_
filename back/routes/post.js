const express = require("express");
const { Post, Comment, User, Category, Image } = require("../models");
const hashtag = require("../models/hashtag");
const category = require("../models/category");
const router = express.Router();

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

module.exports = router;
