const Post = require("../models/postModel");

module.exports = {
  newPost: async (req, res) => {
    try {
      const newPost = new Post({
        displayName: req.name,
        message: req.message,
        chat,
        userId: req.user,
      });

      const successSave = await newPost.save();
      res.json(successSave);
    } catch (err) {
      res.send("error saving: ", err);
    }
  },

  getUserPosts: async (req, res) => {
    console.log("hiiiii");

    try {
      const allPosts = await Post.find({ userId: req.user });
      res.json(allPosts);
    } catch (err) {
      console.log("ERROR WAS CREATED", err);
      res.send("cannot grab posts", err);
    }
  },
};
