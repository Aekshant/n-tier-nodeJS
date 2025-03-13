// src/config/container.js
const { createContainer, asFunction, asValue } = require("awilix");
const mongoose = require("mongoose");

// Load modules
const UserService = require("../app/usecases/UserService");
const UserMongoRepo = require("../infra/mongoRepo/UserMongoRepo");

// Create DI container
const container = createContainer();

container.register({
  mongoose: asValue(mongoose),
  userRepo: asFunction(UserMongoRepo).singleton(),
  userService: asFunction(UserService).singleton(),
});

module.exports = container;
