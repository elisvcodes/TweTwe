const User = require('../models/user');

const logIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findByEmail(email, password);
    user.generateToken();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { logIn };
