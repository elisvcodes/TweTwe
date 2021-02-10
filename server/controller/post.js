const Post = require('../models/post');

const createPost = async (req, res) => {
  try {
    const author = req.user._id;
    const post = new Post(req.body);
    post.author = author;
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getPosts = async (req, res) => {
  const posts = await Post.find({});
  res.status(200).json(posts);
};

const getUserPosts = async (req, res) => {
  const posts = await Post.find({ author: req.params.user });
  res.status(200).json(posts);
};

const getASinglePost = async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  res.status(200).json(post);
};

const updatePost = async (req, res) => {
  const allowedOption = ['title', 'article', 'tags'];
  const providedOption = Object.keys(req.body);
  const match = providedOption.every((option) =>
    allowedOption.includes(option)
  );

  if (!match) throw 'Invalid Option';
  try {
    const post = await Post.findOne({ _id: req.params.id });
    if (String(req.user._id) !== String(post.author)) {
      throw "You can't modify this post";
    }
    providedOption.map((key) => (post[key] = req.body[key]));
    await post.save();
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deletePost = async (req, res) => {
  try {
    await Post.findOneAndDelete({ _id: req.params.id });
    res.status(200).json();
  } catch (error) {
    res.status(500).json(error);
  }
};

const likePost = async (req, res) => {
  try {
    const post = await Post.findOne({ _id: req.params.id });

    const foundId = post.likes.findIndex(
      (id) => String(id) === String(req.user._id)
    );
    if (foundId === -1) {
      post.likes = post.likes.concat({ _id: req.user._id });
    } else {
      post.likes = post.likes.filter(
        (id) => String(id) !== String(req.user._id)
      );
    }
    await post.save();
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports = {
  createPost,
  likePost,
  updatePost,
  deletePost,
  getPosts,
  getUserPosts,
  getASinglePost,
};
