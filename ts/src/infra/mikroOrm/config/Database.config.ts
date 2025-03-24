
import { MikroORM, Options } from '@mikro-orm/core';

import config from "./mikro-orm.config"

export class Database {
    private static instance: MikroORM;
  
    private constructor() {} // Prevent instantiation
  
    public static async init(): Promise<void> {
      if(!Database.instance) {
        Database.instance = await MikroORM.init(config);
        console.log('📦 MikroORM Connected!');
      }
    }
  
    public static getOrm(): MikroORM {
      if (!Database.instance) {
        throw new Error('MikroORM is not initialized. Call init() first.');
      }
      return Database.instance;
    }
  }