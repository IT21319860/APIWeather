// controllers/userController.js
const User = require('../models/User');

exports.addUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.updateUserLocation = async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { email: req.params.email },
      { location: req.body.location },
      { new: true }
    );
    if (!user) return res.status(404).send('User not found');
    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};
