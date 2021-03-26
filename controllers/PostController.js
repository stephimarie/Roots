const Post = require("../models/postModel");
const { getUser } = require("./userController");

module.exports = {
  newPost: async (userObj) => {
    try {
      const newPost = new Post({
        displayName: userObj.displayName,
        message: userObj.message,
        chat: userObj.chat,
        userId: userObj.userId,
      });

      const successSave = await newPost.save();
      console.log(successSave);
      return true;
    } catch (err) {
      console.log("error saving: ", err);
      return false;
    }
  },

  getUserPosts: async (req, res) => {
    console.log("got users");

    try {
      const allPosts = await Post.find();
      res.json(allPosts);
    } catch (err) {
      console.log("ERROR WAS CREATED", err);
      res.send("cannot grab posts", err);
    }
  },

  sendChat: async (req, res) => {
    try {
      const chat = {
        displayName: req.body.displayName,
        chat: req.body.chat,
      };
      const FoundPost = await Post.find(
        {
          userId: req.body.userId,
        },
        (err, data) => {
          if (err) {
            console.log("sendChat", err);
            return;
          } else {
            return data;
          }
        }
      );

      await Post.updateOne(
        { _id: FoundPost[0]._id },
        {
          $push: { chat: chat },
        }
      );
    } catch (err) {
      console.log("setChat post controller", err);
    }
  },

  selfPost: async (req, res) => {
    try {
      const post = await Post.findOne({ displayName: req.query[0] });
      res.json({ post });
    } catch (err) {
      res.send(err);
    }
  },
};
