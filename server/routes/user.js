const express = require('express');
const router = express.Router();
const {
  createUser,
  updateUser,
  deleteUser,
  getSingleUser,
} = require('../controller/user');
const auth = require('../middleware/auth');

router.get('/:id', getSingleUser);
router.post('/', createUser);
router.patch('/update', auth, updateUser);
router.delete('/deletemyaccount', auth, deleteUser);
module.exports = router;
