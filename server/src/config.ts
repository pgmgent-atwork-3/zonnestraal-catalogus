import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
export const config = () => ({
  port: Number(process.env.PORT),
  jwSecret: process.env.SECRET,
  database: {
    type: process.env.MYSQL_TYPE,
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    entities: ['dist/**/*.entity{.ts,.js}', __dirname + '/entities/**/*.js'],
    synchronize: false,
    // ssl: true,
    ssl: { rejectUnauthorized: false },
    // options: { trustServerCertificate: true },
    namingStrategy: new SnakeNamingStrategy(),
  },
});
