require("dotenv").config();
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { newPost } = require("../controllers/PostController");

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
        return res.status(400).json({ msg: "Must enter all the fields." });
      }

      if (password.length < 8) {
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

      const userObj = {
        displayName,
        message: `Hello, my native language is ${native_lang}. I am currently trying to learn ${learn_lang}. Is there anyone who speaks ${learn_lang}?`,
        chat: [],
        userId: savedUser.id,
      };
      const postSuccess = await newPost(userObj);
      if (postSuccess) {
        console.log("post successful");
      } else {
        console.log("post unsuccessful");
      }
      res.json(savedUser);
    } catch (err) {
      res.status(500).json({ msg: err });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      if (!email) {
        res.status(400).json({ msg: "please enter an email" });
      }
      if (!password) {
        res.status(401).json({ msg: "please enter a password" });
      }

      const user = await User.findOne({ email: email });
      console.log(user);
      if (!user) {
        res.status(400).json({ msg: "User doesn't exist" });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        res.status(401).json({ msg: "this was an incorrect password" });
      }

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "24h",
      });

      res.json({
        token,
        user: {
          id: user._id,
          displayName: user.displayName,
          // email: user.email,
          // nativeLang: user.native_lang,
          // learnLang: user.learn_lang,
        },
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

  getProf: async (req, res) => {
    try {
      console.log("req", req.query[0]);
      const getpro = await User.findOne({ displayName: req.query[0] });

      res.json({ getpro });
    } catch (err) {
      res.send(err.response);
    }
  },
};
