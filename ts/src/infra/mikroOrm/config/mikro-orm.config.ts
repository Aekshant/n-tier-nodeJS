
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import dotenv from 'dotenv';
import { readdirSync } from 'fs';
import { join } from 'path';

dotenv.config();

const entitiesPath = join(__dirname, '../entities');
const entityFiles = readdirSync(entitiesPath).filter(file => file.endsWith('.ts') || file.endsWith('.js'));
const entities = entityFiles.map(file => require(join(entitiesPath, file)).default);
const migrationPath = join(__dirname, '../migration');
console.log(migrationPath);

const config = {
  entities,
  dbName:  'demo',
  driver: PostgreSqlDriver,
  user: 'postgres',
  password: 'root123',
  host: 'localhost',
  port:  5432,
  debug: true,
  migrations: {
    path: migrationPath,
    glob: '!(*.d).{js,ts}',
  },
};

export default config