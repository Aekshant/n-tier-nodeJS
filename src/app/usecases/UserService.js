// src/app/usecases/UserService.js
class UserService {
  constructor({ userRepo }) {
    this.userRepo = userRepo;
  }

  async getUser(id) {
    return this.userRepo.getUserById(id);
  }

  async getUserList() {
    return this.userRepo.getUserList();
  }

  async createUser(userData) {
    return this.userRepo.createUser(userData);
  }
}

// Export function for `awilix`
module.exports = ({ userRepo }) => new UserService({ userRepo });
