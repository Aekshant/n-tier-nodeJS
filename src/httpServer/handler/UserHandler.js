
const { ResponseDto, ErrorResponseDto } = require("../../domain/dto/common.dto")

class UserHandler {
  constructor({ userService }) {
    this.userService = userService;
  }

  getUser = async (req, res) => {
    try {
      const user = await this.userService.getUser(req.params.id);
      if (!user) return res.status(404).json({ message: "User not found" });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  getUserList = async (req, res) => {
    try {
      const data = await this.userService.getUserList();
      if (!data) return res.status(404).send( new ResponseDto({ message: "User's not found", success : false, data : [] }) )
      return res.status(200).send( new ResponseDto({ message : "Success", data : data, success : true }) )
    } catch (error) {
      res.status(500).send( new ErrorResponseDto(error) )
    }
  };

  createUser = async (req, res) => {
    try {
      const user = await this.userService.createUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
}

module.exports = UserHandler;
