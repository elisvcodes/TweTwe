const express = require('express');
const router = express.Router();
const { logIn } = require('../controller/auth');

router.post('/login', logIn);

module.exports = router;
