require("dotenv").config();
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

module.exports = {
  register: async (req, res) => {
    try {
      const {
        email,
        password,
        passwordCheck,
        displayName,
        native_lang,
        learn_lang,
      } = req.body;

      if (
        !email ||
        !password ||
        !passwordCheck ||
        !displayName ||
        !native_lang ||
        !learn_lang
      ) {
        return res.status(400).json({ msg: "Must enter all the feilds." });
      }

      if (passwordCheck.length < 8) {
        return res
          .status(400)
          .json({ msg: "password needs to be longer than 8 characters" });
      }

      const existingUser = await User.findOne({ email: email });

      if (existingUser) {
        return res.status(400).json({ msg: "User already exists" });
      }

      const salt = await bcrypt.genSalt(15);
      const passwordHash = await bcrypt.hash(password, salt);

      const newUser = new User({
        email,
        password: passwordHash,
        displayName,
        native_lang,
        learn_lang,
      });

      const savedUser = await newUser.save();
      res.json(savedUser);
    } catch (err) {
      res.status(500).json({ msg: err });
    }
  },

  login: async (req, res) => {
    try {
      const { displayName, password } = req.body;

      if (!displayName || !password) {
        res.status(400).json({ msg: "Must enter all feilds." });
      }

      const user = await User.findOne({ displayName: displayName });

      if (!user) {
        res.status(400).json({
          msg: "User doesnt exsist! Please sign up on the register page.",
        });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        res.status(400).json({ msg: "incorrect password entered" });
      }

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "24h",
      });

      res.json({
        token,
        user: { id: user._id, displayName: user.displayName },
      });
    } catch (err) {
      res.status(500).json({ msg: err });
    }
  },

  getUser: async (req, res) => {
    try {
      const user = await User.findById(req.user);

      res.json({
        displayName: user.displayName,
        id: user._id,
      });
    } catch (err) {
      res.send(err.response);
    }
  },
};
