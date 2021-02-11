const Comment = require('../models/comment');

const createComment = async (req, res) => {
  const comment = new Comment(req.body);
  comment.save((err, comment) => {
    if (err) return res.json(err);
    Comment.find({ _id: comment._id })
      .populate('author')
      .exec((err, result) => {
        if (err) res.json(err);
        return res.status(200).json(result);
      });
  });
};

const getComments = async (req, res) => {
  Comment.find({ postId: req.body.postId })
    .populate('author')
    .exec((err, comments) => {
      if (err) return res.status(400).send(err);
      res.status(200).json(comments);
    });
};

module.exports = { createComment, getComments };
