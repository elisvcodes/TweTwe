const express = require('express');
const router = express.Router();
const { createPost, likePost, updatePost } = require('../controller/post');
const auth = require('../middleware/auth');

router.post('/', auth, createPost);
router.patch('/:id/like', auth, likePost);
router.patch('/:id', updatePost);
module.exports = router;
