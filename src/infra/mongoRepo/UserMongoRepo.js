// src/infra/mongoRepo/UserMongoRepo.js
const mongoose = require("mongoose");
const UserDao = require("../../domain/dao/UserDao");
const { GetUserDto, UserCreateDto, UserListDto } = require("../../domain/dto/UserDto");

// Define Mongoose Schema
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

// Create Mongoose Model
const UserModel = mongoose.model("User", userSchema);

class UserMongoRepo extends UserDao {
  async createUser(userData) {
    const validatedData = new UserCreateDto(userData);
    const user = await UserModel.create(validatedData);
    return new GetUserDto(user);
  }

  async getUserById(userId) {
    const user = await UserModel.findById(userId);
    return user ? new GetUserDto(user) : null;
  }

  async getUserList() {
    const users = await UserModel.find();
    return users.length ? new UserListDto(users) : null;
  }

  async getUserByEmail(email) {
    return await UserModel.findOne({ email });
  }

  async updateUser(userId, updateData) {
    const updatedUser = await UserModel.findByIdAndUpdate(userId, updateData, { new: true });
    return updatedUser ? new GetUserDto(updatedUser) : null;
  }

  async deleteUser(userId) {
    return await UserModel.findByIdAndDelete(userId);
  }
}

module.exports = () => new UserMongoRepo();
