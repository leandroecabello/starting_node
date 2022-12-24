const { Schema, model } = require("mongoose");

const mySchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  chat: {
    type: Schema.Types.ObjectId,
    ref: "Chat",
  },
  message: {
    type: String,
    require: true,
  },
  date: Date,
  file: String,
});

const mesaggeModel = model("Message", mySchema);

module.exports = mesaggeModel;
