const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  displayName: { type: String, required: true, unique: true },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Enter a valid email"],
  },
  password: { type: String, required: true, minLength: 8, maxLength: 32 },
  native_lang: { type: Array, required: true },
  learn_lang: { type: Array, required: true },
});

module.exports = User = mongoose.model("user", userSchema);
