const Post = require("../models/postModel");

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
