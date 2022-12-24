const { createUser, getUsers } = require("../services/user.services");
const { success, error } = require("../utils/response");

const addUser = async (req, res) => {
  const { name } = req.body;

  try {
    if (!name || Number(name))
      throw new Error(error(req, res, "Invalid name", 400));
    const user = {
      name,
    };
    const newUser = await createUser(user);
    success(req, res, newUser, 201);
  } catch (e) {
    error(req, res, "Internal Error", 500, e);
  }
};

const listUser = async (req, res) => {
  try {
    const users = await getUsers();
    success(req, res, users, 200);
  } catch (e) {
    error(req, res, "Internal Error", 500, e);
  }
};

module.exports = { addUser, listUser };
