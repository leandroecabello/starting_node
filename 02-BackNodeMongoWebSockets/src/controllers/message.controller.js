const {
  add,
  list,
  updateText,
  removeMessage,
} = require("../services/message.services");
const { socket } = require("../socket");
const addMessage = (req, res) => {
  const { user, message, chat } = req.body;
  const { file } = req;
  return new Promise((resolve, reject) => {
    if (!user || !message || !chat) {
      console.error("[messageController] No hay usuario o mensaje o chat");
      reject("Los datos son incorrectos");
      return false;
    }
    let fileUrl = "";
    if (file) {
      fileUrl = `http://localhost:3000/src/uploads/${file.filename}`;
    }
    const fullMessage = {
      user,
      message,
      chat,
      date: new Date(),
      file: fileUrl,
    };
    add(fullMessage);
    socket.io.emit("message", fullMessage);
    resolve(fullMessage);
  });
};

const getMessages = async (req, res) => {
  const filterMessages = req.query.user || null;
  return new Promise((resolve, reject) => {
    resolve(list(filterMessages));
  });
};

const updateMessage = (req, res) => {
  const { id } = req.params;
  const { message } = req.body;
  return new Promise(async (resolve, reject) => {
    if (!id || !message) {
      reject("Invalid data");
      return false;
    }
    const result = await updateText(id, message);
    resolve(result);
  });
};

const deleteMessage = (req, res) => {
  const { id } = req.params;
  return new Promise(async (resolve, reject) => {
    if (!id) {
      reject("Invalid Id");
      return false;
    }
    removeMessage(id)
      .then(() => resolve())
      .catch((e) => reject(e));
  });
};
module.exports = { addMessage, getMessages, updateMessage, deleteMessage };
