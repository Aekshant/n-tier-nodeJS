// src/server.js
const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./httpServer/routers/UserRouter");

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/demo");

// Register Routes
app.use("/users", userRouter);

module.exports = app