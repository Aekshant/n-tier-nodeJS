// src/domain/dto/UserDto.js

class GetUserDto {
  constructor(user) {
    this.id = user._id;
    this.name = user.name;
    this.email = user.email;
  }
}

class UserCreateDto {
  constructor({ name, email, password }) {
    if (!name || !email || !password) {
      throw new Error("All fields (name, email, password) are required.");
    }
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

class UserListDto {
  constructor(users) {
    this.users = users.map((user) => new GetUserDto(user)) || [];
  }
}

module.exports = { GetUserDto, UserCreateDto, UserListDto };
