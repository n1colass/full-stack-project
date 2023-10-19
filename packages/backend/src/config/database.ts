/* eslint-disable no-console */
import { DataSource } from 'typeorm';
import { Todo } from '../entities/Todo';
import { User } from '../entities/User';
import { Token } from '../entities/Token';

const connectDB = async () => {
  try {
    const AppDataSource = new DataSource({
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      logging: ['query', 'error'],
      type: 'postgres',
      entities: [Todo, User, Token],
      migrations: ['dist/migrations/**/*.{ts,js}'],
      subscribers: ['src/subscriber/**/*.ts'],
      database: process.env.POSTGRES_DB,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      synchronize: false
    });
    await AppDataSource.initialize();
    console.log('PostgreSQL Connected...');
  } catch (err: any) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
