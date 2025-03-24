import { EntityManager } from '@mikro-orm/core';
import User from '../entities/User';
import { Database } from '../config/Database.config';
import { UserDAO } from "../../../domain/dao/user.dao"
import { UserDTO } from '../../../domain/dto/user.dto';

export class UserRepository implements UserDAO {    
    private get em(): EntityManager {
        return Database.getOrm().em.fork();
    }
    
    async create(userBody: UserDTO): Promise<UserDTO> {
        const user = new User();
        user.name = userBody.name;
        user.email = userBody.email;
        await this.em.persistAndFlush(user);
        return user;
    }

    async getAll(): Promise<UserDTO[] | []> {
        return await this.em.find(User, {});
    }

    async getUserById(id: number): Promise<UserDTO | null> {
        return await this.em.findOne(User, { id });
    }
    
    async update(id: number, userBody: Partial<UserDTO>): Promise<boolean> {
        const user = await this.getUserById(id);
        if (!user) return false;
        if (userBody.name) user.name = userBody.name;
        if (userBody.email) user.email = userBody.email;
        await this.em.persistAndFlush(user);
        return true;
    }

    async delete(id: number): Promise<boolean> {
        const user = await this.getUserById(id);
        if (!user) return false;
    
        await this.em.removeAndFlush(user);
        return true;
    }
}