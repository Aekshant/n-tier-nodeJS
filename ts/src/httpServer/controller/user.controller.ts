import { Request, Response } from "express";
import { userDIObject } from "../../di/user.di";

export class UserHandler {
  static async create(req: Request, res: Response) {
    const user = await userDIObject.createUser(req.body);
    res.status(201).json(user);
  }

  static async get(req: Request, res: Response) {
    const user = await userDIObject.getUserById(req.params.id);
    res.json(user);
  }

  static async update(req: Request, res: Response) {
    const user = await userDIObject.updateUser(req.params.id, req.body);
    res.json(user);
  }

  static async delete(req: Request, res: Response) {
    await userDIObject.deleteUser(req.params.id);
    res.status(204).send();
  }
}
