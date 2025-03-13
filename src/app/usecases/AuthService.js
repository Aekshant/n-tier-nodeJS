// src/app/usecases/AuthService.js
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

class AuthService {
  constructor({ userRepo }) {
    this.userRepo = userRepo;
  }

  async register(userData) {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    return this.userRepo.createUser({ ...userData, password: hashedPassword });
  }

  async login(email, password) {
    const user = await this.userRepo.getUserByEmail(email);
    if (!user) throw new Error("Invalid email or password");

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) throw new Error("Invalid email or password");

    return this.generateToken(user);
  }

  generateToken(user) {
    return jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
  }

  verifyToken(token) {
    return jwt.verify(token, process.env.JWT_SECRET);
  }
}

module.exports = ({ userRepo }) => new AuthService({ userRepo });
