const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const postsController = require("../controllers/posts");
const audioController = require("../controllers/audio");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes - simplified for now
router.get("/", homeController.getIndex);
router.get("/home", ensureAuth, postsController.getHome);
router.get("/account", ensureAuth, postsController.getAccount);
router.get("/startnew", ensureAuth, postsController.getStartnew);
router.get("/questions/cashier", ensureAuth, postsController.getCashierQ);
router.get("/questions/advisor", ensureAuth, postsController.getAdvisorQ);
router.get("/questions/softwareengineer", ensureAuth, postsController.getSoftwareQ);
router.get("/projects", ensureAuth, postsController.getProjects);
router.get("/login", authController.getLogin);
router.get("/getTranscript", audioController.getTranscript);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

module.exports = router;
