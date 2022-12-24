const { Router } = require("express");
const router = Router();
const { addChat, chatList } = require("../controllers/chat.controller");

router.get("/", chatList).post("/", addChat);

module.exports = router;
