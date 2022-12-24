const Chat = require("../models/chat.model");

async function createChat(chat) {
  try {
    const myChat = new Chat(chat);
    return await myChat.save();
  } catch (error) {
    console.log(error.message);
    throw new Error("Error saving");
  }
}

async function getChats(userId) {
  try {
    let filter = {};
    if (userId) filter = { users: userId };
    return await Chat.find(filter).populate("users").exec();
  } catch (error) {
    console.log(error.message);
    throw new Error("Unexpected error");
  }
}

module.exports = {
  createChat,
  getChats,
};
