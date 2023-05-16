const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");

module.exports = {
  getHome: async (req, res) => {
    try {
      const posts = await Post.find({ user: req.user.id });
      res.render("home.ejs", { posts: posts, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getProjects: async (req, res) => {
    try {
      const posts = await Post.find().sort({ createdAt: "desc" }).lean();
      res.render("projects.ejs", { posts: posts });
    } catch (err) {
      console.log(err);
    }
  },
  getPost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.render("post.ejs", { post: post, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getAccount: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.render("account.ejs", { post: post, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getStartnew: async (req, res) => {
    try {
      const posts = await Post.find({ user: req.user.id });
      res.render("startnew.ejs", { posts: posts, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  createPost: async (req, res) => {
    try {
      // Upload audio to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path, {resource_type: "auto"});

      await Post.create({
        title: req.body.title,
        audio: result.secure_url,
        cloudinaryId: result.public_id,
        question: req.body.question,
        likes: 0,
        user: req.user.id,
      });
      console.log("Post has been added!");
      res.redirect("/home");
    } catch (err) {
      console.log(err);
    }
  },
  likePost: async (req, res) => {
    try {
      await Post.findOneAndUpdate(
        { _id: req.params.id },
        {
          $inc: { likes: 1 },
        }
      );
      console.log("Likes +1");
      res.redirect(`/post/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },
  deletePost: async (req, res) => {
    try {
      // Find post by id
      let post = await Post.findById({ _id: req.params.id });
      // Delete audio from cloudinary
      await cloudinary.uploader.destroy(post.cloudinaryId);
      // Delete post from db
      await Post.remove({ _id: req.params.id });
      console.log("Deleted Post");
      res.redirect("/home");
    } catch (err) {
      res.redirect("/home");
    }
  },
};
