const PostModel = require("../models/Post");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const secret = process.env.SECRET;

exports.createPost = async (req, res) => {
  //File upload
  // //restruc จะไม่ได้รับ cover เข้ามาต้องจัดการก่อน >> middlewares
  const { path } = req.file;
  const author = req.userId;
  const { title, summary, content } = req.body;
  if (!title || !summary || !content)
    return res.status(400).json({
      message: "All Fields is required",
    });

  const postDoc = await PostModel.create({
    title,
    summary,
    content,
    cover: path,
    author,
  });
  res.json(postDoc);
};
