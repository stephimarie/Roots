const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  displayName: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  chat: {
    type: Array,
  },
  userId: {
    type: String,
    required: true,
  },
});
