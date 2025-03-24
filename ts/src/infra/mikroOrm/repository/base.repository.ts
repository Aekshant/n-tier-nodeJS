import { EntityManager, EntityName, FilterQuery } from '@mikro-orm/core';
import { Database } from '../config/Database.config';

// Base entity with an `id` field
interface BaseEntity {
    id: number;
}

export class BaseRepository<T extends BaseEntity, DTO> {
    private entity: EntityName<T>;

    constructor(entity: EntityName<T>) {
        this.entity = entity;
    }

    protected getEntityManager(): EntityManager {
        return Database.getOrm().em.fork();
    }

    async create(dto: DTO): Promise<T> {
        const entity = this.getEntityManager().create(this.entity, dto as unknown as T);
        await this.getEntityManager().persistAndFlush(entity);
        return entity;
    }

    async getAll(): Promise<T[]> {
        return await this.getEntityManager().find(this.entity, {});
    }

    async getUserById(id: number): Promise<T | null> {
        return await this.getEntityManager().findOne(this.entity, { id } as FilterQuery<T>);
    }

    async update(id: number, dto: Partial<DTO>): Promise<boolean> {
        const entity = await this.getUserById(id);
        if (!entity) return false;

        Object.assign(entity, dto);
        await this.getEntityManager().persistAndFlush(entity);
        return true;
    }

    async delete(id: number): Promise<boolean> {
        const entity = await this.getUserById(id);
        if (!entity) return false;

        await this.getEntityManager().removeAndFlush(entity);
        return true;
    }
}
