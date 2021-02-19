const express = require('express');
const router = express.Router();
const { createUser, updateUser } = require('../controller/user');
const auth = require('../middleware/auth');

router.post('/', createUser);
router.patch('/update', auth, updateUser);
module.exports = router;
