import { UserDAO } from "../../domain/dao/user.dao";
import { UserDTO } from "../../domain/dto/user.dto";

export class Users {
  constructor(private userRepo: UserDAO) {}

  async createUser(user: UserDTO): Promise<UserDTO> {
    return await this.userRepo.create(user);
  }

  async getUserById(id: string) {
    return await this.userRepo.getById(id);
  }

  async updateUser(id: string, data: Partial<UserDTO>) {
    return await this.userRepo.update(id, data);
  }

  async deleteUser(id: string) {
    return await this.userRepo.delete(id);
  }
}
