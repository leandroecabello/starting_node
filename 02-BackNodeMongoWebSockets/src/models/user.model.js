const { Schema, model } = require("mongoose");

const mySchema = new Schema({
  name: String,
});

const userModel = model("User", mySchema);

module.exports = userModel;
