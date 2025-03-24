import { Request, Response } from "express";
import { userDIObject } from "../../di/user.di";
import { SuccessResponseDto, ErrorResponseDto } from "../../domain/dto/common.dto";

export class UserHandler {
  static async create(req: Request, res: Response): Promise<void>{
    try {
      const user = await userDIObject.createUser(req.body);
      if (user) {
        res.status(200).json(new SuccessResponseDto("Users created successfully", user, true));
      }else{
        res.status(404).json(new ErrorResponseDto("No users found"));
      }
    } catch (error) {
      res.status(400).json(new ErrorResponseDto(String(error)));
    }
  }

  static async get(req: Request, res: Response): Promise<void> {
    try {
      const users = await userDIObject.getAllUser();
      if (users.length) {
        res.status(200).json(new SuccessResponseDto("Users retrieved successfully", users, true));
      }else{
        res.status(404).json(new ErrorResponseDto("No users found"));
      }
    } catch (error) {
       res.status(400).json(new ErrorResponseDto(String(error)));
    }
  }
  

  static async getOne(req: Request, res: Response): Promise<void> {
    try {
      const id : number = Number(req.params.id)
      const user = await userDIObject.getUserById(id);
      if (user) {
         res.status(200).json(new SuccessResponseDto("User retrieved successfully", user, true));
      }else{
        res.status(404).json(new ErrorResponseDto("No user found"));
      }
    } catch (error) {
       res.status(400).json(new ErrorResponseDto(String(error)));
    }
  }

  static async update(req: Request, res: Response): Promise<void>{
    try {
      const id : number = Number(req.params.id)
      const user = await userDIObject.updateUser(id, req.body);
      if (user) {
         res.status(200).json(new SuccessResponseDto("User Updated successfully", null, true));
      }else{
        res.status(404).json(new ErrorResponseDto("No users found to update"));
      }
    } catch (error) {
       res.status(400).json(new ErrorResponseDto(String(error)));
    }

  }

  static async delete(req: Request, res: Response): Promise<void> {
    try {
      const id : number = Number(req.params.id)
      const user =  await userDIObject.deleteUser(id);
      if (user) {
         res.status(200).json(new SuccessResponseDto("User Deleted successfully", null, true));
      }else{
        res.status(404).json(new ErrorResponseDto("No users found to delete"));
      }
    } catch (error) {
       res.status(400).json(new ErrorResponseDto(String(error)));
    }
  }
}
