const PostModel = require("../models/Post");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const secret = process.env.SECRET;

//Create Post
exports.createPost = async (req, res) => {
  //File
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

//getPosts
exports.getPosts = async (req, res) => {
  const posts = await PostModel.find()
    .populate("author", ["username"])
    .sort({ createdAt: -1 })
    .limit(20);
  //Select * FROM POST WHERE POST.author = USER._id
  res.json(posts);
};

//getPostsById
exports.getById = async (req, res) => {
  const { id } = req.params;
  try {
    const postDoc = await PostModel.findById(id).populate("author", [
      "username",
    ]);
    if (!postDoc) {
      return res.status(404).send({
        message: "Post Not Found!",
      });
    }
    res.json(postDoc);
  } catch (error) {
    res.status(500).send({
      message: "Something went wrong while fetching the post!",
    });
  }
};

exports.updatePost = async (req, res) => {
  const { id } = req.params;
  const authorId = req.userId;
  if (!id) return res.status(404).json({ message: "Post id is not Provided" });
  try {
    const postDoc = await PostModel.findById(id);
    if (authorId !== postDoc.author.toString()) {
      res.status(403).send({
        message: "You Cannnot update this post",
      });
      return;
    }
    const { title, summary, content } = req.body;
    if (!title || !summary || !content) {
      return res.status(400).json({ message: "All fields are required" });
    }
    postDoc.title = title;
    postDoc.summary = summary;
    postDoc.content = content;
    if (req.file) {
      const { path } = req.file;
      postDoc.cover = path;
    }
    await postDoc.save();
    res.json(postDoc);
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Somthing error occurrend white updating a post",
    });
  }
};
exports.deletePost = async (req, res) => {
  const { id } = req.params;
  const authorId = req.userId;
  try {
    const postDoc = await PostModel.findById(id);
    if (authorId !== postDoc.author.toString()) {
      return res.status(403).send({
        message: "You can not delete this post!",
      });
    }
    await postDoc.deleteOne();
    res.json(postDoc);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Something went wrong while delete the post!",
    });
  }
};
