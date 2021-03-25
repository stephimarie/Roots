const router = require("express").Router();
const auth = require("../middleware/auth");
const {
  newPost,
  getUserPosts,
  sendChat,
  selfPost,
} = require("../controllers/PostController");

router.post("/", auth, newPost);

router.get("/", getUserPosts);

router.post("/chat", sendChat);

router.get("/profile", selfPost);

module.exports = router;
