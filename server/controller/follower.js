const Follower = require('../models/follower');

const follow = (req, res) => {
  const follow = new Follower(req.body);
  follow.save((err, result) => {
    if (err) return res.status(400).json(err);
    res.status(201).json(result);
  });
};

const followerCount = (req, res) => {
  Follower.find({ following: req.body.following }).exec((err, result) => {
    if (err) return res.status(400).json(err);
    res.status(200).json({ followerCount: result.length });
  });
};

const followingCount = (req, res) => {
  Follower.find({ follower: req.body.follower }).exec((err, result) => {
    if (err) return res.status(400).json(err);
    res.status(200).json({ followingCount: result.length });
  });
};

const subscribed = (req, res) => {
  Follower.find({
    following: req.body.following,
    follower: req.body.follower,
  }).exec((err, result) => {
    if (err) return res.status(400).json(err);
    let subscribed = false;
    if (result.length > 0) {
      subscribed = true;
    }

    res.status(200).json(subscribed);
  });
};

const unfollow = (req, res) => {
  Follower.findOneAndDelete({
    following: req.body.following,
    follower: req.body.follower,
  }).exec((err, result) => {
    console.log(result);
    if (err) return res.status(400).json(err);
    res.status(200).json(result);
  });
};

module.exports = {
  follow,
  followerCount,
  followingCount,
  unfollow,
  subscribed,
};
