const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  follow,
  followerCount,
  followingCount,
  unfollow,
  subscribed,
} = require('../controller/follower');

router.post('/', auth, follow);
router.post('/followercount', followerCount);
router.post('/followingcount', followingCount);
router.post('/unfollow', auth, unfollow);
router.post('/subscribed', auth, subscribed);
module.exports = router;
