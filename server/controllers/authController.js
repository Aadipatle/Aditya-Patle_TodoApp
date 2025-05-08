const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.create({ email, password });
    res.status(201).json({ token: jwt.sign({ id: user._id }, process.env.JWT_SECRET) });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
 
exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }
  res.json({ token: jwt.sign({ id: user._id }, process.env.JWT_SECRET) });
};