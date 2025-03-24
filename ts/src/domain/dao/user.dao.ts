import { UserDTO } from "../dto/user.dto";

export interface UserDAO {
  create(user: UserDTO): Promise<UserDTO>;
  getAll(): Promise<UserDTO[] | []>;
  getUserById(id: number): Promise<UserDTO | null>;
  update(id: number, user: Partial<UserDTO>): Promise<boolean>;
  delete(id: number): Promise<boolean>;
}
