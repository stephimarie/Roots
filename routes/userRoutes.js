const router = require("express").Router();
const auth = require("../middleware/auth");
const {
  register,
  login,
  getUser,
  getProf,
} = require("../controllers/UserController");

router.post("/register", register);
router.post("/login", login);
router.get("/", auth, getUser);
router.get("/profile", getProf);

module.exports = router;
