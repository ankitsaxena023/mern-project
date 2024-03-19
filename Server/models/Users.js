const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  id: { type: Number, unique: true, required: true },
  name: String,
  email: String,
});

const UserModal = mongoose.model("users", UserSchema);
module.exports = UserModal;
