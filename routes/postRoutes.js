const router = require("express").Router();
const auth = require("../middleware/auth");
const {
  newPost,
  getUserPosts,
  sendChat,
} = require("../controllers/PostController");

router.post("/", auth, newPost);

router.get("/", getUserPosts);

router.post("/chat", sendChat);

module.exports = router;
