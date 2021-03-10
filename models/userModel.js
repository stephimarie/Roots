const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  displayName: { type: String, required: true, unique: true },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Enter a valid email"],
  },
  password: { type: String, required: true, minLength: 8 },
  native_lang: { type: String, required: true },
  learn_lang: { type: String, required: true },
});

module.exports = User = mongoose.model("user", userSchema);
