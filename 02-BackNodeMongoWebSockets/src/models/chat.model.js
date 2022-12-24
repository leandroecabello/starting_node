const { Schema, model } = require("mongoose");

const chatSchema = new Schema({
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const chatModel = model("Chat", chatSchema);

module.exports = chatModel;
