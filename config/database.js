const mongoose = require("mongoose");
const express = require('express')

const app = express()
const PORT = process.env.PORT || 5000

const connectDB = async () => {
  try {
    console.log(process.env.DB_STRING)
    const conn = await mongoose.connect(process.env.DB_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });


    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};



module.exports = connectDB;
