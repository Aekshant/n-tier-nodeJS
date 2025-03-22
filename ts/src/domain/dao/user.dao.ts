import { UserDTO } from "../dto/user.dto";

export interface UserDAO {
  create(user: UserDTO): Promise<UserDTO>;
  getById(id: string): Promise<UserDTO | null>;
  update(id: string, user: Partial<UserDTO>): Promise<UserDTO | null>;
  delete(id: string): Promise<boolean>;
}
