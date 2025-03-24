import { UserRepository } from "../infra/mikroOrm/repository/users.repository";
import { Users } from "../app/usecases/users.usecases";

const userRepository = new UserRepository();

export const userDIObject = new Users(userRepository);
