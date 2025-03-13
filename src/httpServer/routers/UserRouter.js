// src/httpServer/routers/UserRouter.js
const express = require("express");
const container = require("../../di/userContainer"); // Import DI container
const UserHandler = require("../handler/UserHandler");

const router = express.Router();

// Manually initialize the handler by injecting dependencies
const userService = container.resolve("userService");
const userHandler = new UserHandler({ userService });

// Routes
router.get("/", userHandler.getUserList);
router.get("/:id", userHandler.getUser);
router.post("/", userHandler.createUser);

module.exports = router;
