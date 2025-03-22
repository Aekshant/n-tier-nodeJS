import mongoose from "mongoose";
import { UserDTO } from "../../../domain/dto/user.dto";
import { UserDAO } from "../../../domain/dao/user.dao";

const UserSchema = new mongoose.Schema<UserDTO>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
});

const UserModel = mongoose.model<UserDTO>("User", UserSchema);

export class UserRepository implements UserDAO {
  async create(user: UserDTO): Promise<UserDTO> {
    return await UserModel.create(user);
  }

  async getById(id: string): Promise<UserDTO | null> {
    return await UserModel.findById(id);
  }

  async update(id: string, user: Partial<UserDTO>): Promise<UserDTO | null> {
    return await UserModel.findByIdAndUpdate(id, user, { new: true });
  }

  async delete(id: string): Promise<boolean> {
    const result = await UserModel.findByIdAndDelete(id);
    return !!result;
  }
}
