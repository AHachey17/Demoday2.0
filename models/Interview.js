const mongoose = require("mongoose");

const InterviewSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
   postion: {
    type: String,
    required: true,
  } 
});

module.exports = mongoose.model("interview", InterviewSchema);
