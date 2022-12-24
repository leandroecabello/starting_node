const User = require("../models/user.model");

const createUser = async (user) => {
  const newUser = new User(user);
  return await newUser.save();
};

const getUsers = async () => User.find();

module.exports = {
  createUser,
  getUsers,
};
