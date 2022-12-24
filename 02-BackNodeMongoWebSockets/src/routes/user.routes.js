const { Router } = require("express");
const { addUser, listUser } = require("../controllers/user.controller");
const { success, error } = require("../utils/response");
const router = Router();

router.post("/", addUser).get("/", listUser);

module.exports = router;
