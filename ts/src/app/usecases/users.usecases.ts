import { UserDAO } from "../../domain/dao/user.dao";
import { UserDTO } from "../../domain/dto/user.dto";

export class Users {
  constructor(private userRepo: UserDAO) {}

  async createUser(user: UserDTO): Promise<UserDTO> {
    return await this.userRepo.create(user);
  }

  async getAllUser() {
    return await this.userRepo.getAll();
  }

  async getUserById(id: number) {
    return await this.userRepo.getUserById(id);
  }

  async updateUser(id: number, data: Partial<UserDTO>) {
    return await this.userRepo.update(id, data);
  }

  async deleteUser(id: number) {
    return await this.userRepo.delete(id);
  }
}
