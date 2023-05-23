const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");
const Interview = require("../models/Interview");
const axios = require("axios");
const assembly = axios.create({
  baseURL: "https://api.assemblyai.com/v2",
  headers: {
    authorization: "a6cf19bad2b14bbc86429dc2c062f6f4",
    "content-type": "application/json",
  },
});

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
 

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
      const post = await Post.findById(req.params.id);
      res.render("startnew.ejs", { post: post, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getQuestions: async (req, res) => {
    try {
      const questions = await Interview.find({position: "Cashier"});
      console.log(questions);
      res.json( { questions, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  createPost: async (req, res) => {
    try {
      console.log(req.file);
      // Upload audio to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path, {resource_type: "auto"});

      console.log(result);
      const postresult = await assembly.post("/transcript", {
        audio_url: result.secure_url
      });

      console.log(postresult.data);
      
      while (true) {
        await sleep(1000);
        const transcription = await assembly.get(
          `/transcript/${postresult.data.id}`
          );
          console.log(transcription.data);
        if (transcription.data.status == "completed") {
          await Post.create({
            title: req.body.title,
            audio: result.secure_url,
            cloudinaryId: result.public_id,
            question: req.body.question,
            likes: 0,
            user: req.user.id,
            transcript: transcription.data.text,
            words: transcription.data.words
          });  
          console.log("Post has been added!");
           res.redirect("/home");
           return
        }
      }
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
