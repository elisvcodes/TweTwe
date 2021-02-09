const User = require('../models/user');

const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    user.generateToken();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { createUser };
