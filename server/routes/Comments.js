const express = require("express");
const router = express.Router();
const { Comments } = require("../models");
const {validateToken} = require("../middlewares/AuthMiddleWare")


router.get("/:postId", async (req,res)=> {
  const postId = req.params.postId;
  const comments = await Comments.findAll({where: { postId: postId}})
  res.json(comments);
  console.log(comments)
})

router.post("/", validateToken, async (req, res) => {
  const comment = req.body;
  await Comments.create(comment)
  res.json(comment)
})

module.exports = router;