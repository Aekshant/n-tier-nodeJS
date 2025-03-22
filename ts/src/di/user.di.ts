import { UserRepository } from "../infra/typeOrm/repository/UserRepository";
import { Users } from "../app/usecases/users.usecases";

const userRepository = new UserRepository();

export const userDIObject = new Users(userRepository);
