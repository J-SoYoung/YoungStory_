const express = require("express");
const router = express.Router();

router.post('/post', (req,res)=>{
  res.json('소영')
})

module.exports = router;
