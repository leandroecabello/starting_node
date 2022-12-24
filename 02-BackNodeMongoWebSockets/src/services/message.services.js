const Message = require("../models/message.model");

const addMessage = (message) => {
  const myMessage = new Message(message);
  myMessage.save();
};

const getMessages = (filterUser) => {
  return new Promise((resolve, reject) => {
    let filter = {};
    if (filterUser !== null) {
      filter = { user: filterUser };
    }
    Message.find(filter)
      .populate("user")
      .exec((err, populated) => {
        if (err) {
          reject(err);
          return false;
        }
        resolve(populated);
      });
  });
};

const updateText = async (id, message) => {
  const foundMessage = await Message.findById(id);
  foundMessage.message = message;
  const newMessage = await foundMessage.save();
  return newMessage;
};

const removeMessage = (id) => {
  return Message.deleteOne({ _id: id });
};

module.exports = {
  add: addMessage,
  list: getMessages,
  updateText,
  removeMessage,
};
