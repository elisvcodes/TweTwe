const express = require('express');
const router = express.Router();
const { createPost } = require('../controller/posts');
const auth = require('../middleware/auth');

router.post('/', auth, createPost);

module.exports = router;
