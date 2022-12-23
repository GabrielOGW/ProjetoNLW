import { DataSource } from "typeorm";

export const conectionSource = new DataSource({
    type: 'sqlite',
    host: 'localhost',
    port: 3000,
    username: 'user',
    password: '123',
    name: 'default',
    entities: ['src/**/**.entity{.ts,.js}'],
    migrations: ['src/database/migrations/*{.ts,.js}'],
})