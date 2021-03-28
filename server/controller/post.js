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
  const posts = await Post.find({ author: req.params.user })
    .populate('author')
    .exec((err, result) => {
      if (err) return res.status(500).json(err);
      res.status(200).json(result.reverse());
    });
};

const getASinglePost = async (req, res) => {
  Post.findOne({ _id: req.params.id })
    .populate('author')
    .exec((err, result) => {
      if (err) return res.status(500).json(err);
      res.status(200).json(result);
    });
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
  await Post.findOne({ _id: req.params.id })
    .populate('author')
    .exec((err, result) => {
      if (err) return res.status(404).json(err);
      const foundId = result.likes.findIndex(
        (id) => String(id) === String(req.user._id)
      );
      if (foundId === -1) {
        result.likes = result.likes.concat({ _id: req.user._id });
      } else {
        result.likes = result.likes.filter(
          (id) => String(id) !== String(req.user._id)
        );
      }
      result.save();
      res.status(200).json(result);
    });
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
