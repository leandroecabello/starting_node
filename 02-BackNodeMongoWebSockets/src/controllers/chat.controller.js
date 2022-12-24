const { createChat, getChats } = require("../services/chat.services");
const { success } = require("../utils/response");

async function addChat(req, res) {
  console.log({ req });
  try {
    const { users } = req.body;
    if (!users.length) {
      console.error("[ERROR] [CHAT CONTROLLER] No hay usuarios");
      throw new Error();
    }
    const chat = { users };
    const newChat = await createChat(chat);
    success(req, res, newChat, 201);
  } catch (e) {
    error(req, res, "Información inválida", 400, e);
  }
}

async function chatList(req, res) {
  try {
    const { userId } = req.params;
    const chatList = await getChats(userId);
    success(req, res, chatList, 200);
  } catch (e) {
    error(req, res, "Internal error", 500, e);
  }
}

module.exports = {
  addChat,
  chatList,
};
