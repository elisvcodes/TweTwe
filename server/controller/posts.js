const Post = require('../models/post');

const createPost = async (req, res) => {
  try {
    const post = new Post(req.body);
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { createPost };
