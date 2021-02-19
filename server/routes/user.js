const express = require('express');
const router = express.Router();
const { createUser, updateUser, deleteUser } = require('../controller/user');
const auth = require('../middleware/auth');

router.post('/', createUser);
router.patch('/update', auth, updateUser);
router.delete('/deletemyaccount', auth, deleteUser);
module.exports = router;
