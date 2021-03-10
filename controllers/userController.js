require("dotenv").config();
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

module.exports = {
  register: async (req, res) => {
    console.log("im inside register inside usercontroller");
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

      if (password !== passwordCheck) {
        return res
          .status(400)
          .json({ msg: "password does not match the password check" });
      }

      const existingUser = await User.findOne({ email: email });

      if (existingUser) {
        return res.status(400).json({ msg: "User already exists" });
      }

      const salt = await bcrypt.genSalt();
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
      const { email, password } = req.body;

      if (!email || !password) {
        res.status(400).json({ msg: "all required fields were not sent" });
      }

      const user = await User.findOne({ email: email });
      console.log(user);
      if (!user) {
        res.status(400).json({ msg: "User downs exist" });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        res.status(400).json({ msg: "this was an incorrect password" });
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
