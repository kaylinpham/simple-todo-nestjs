import { registerAs } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm"

export default registerAs('database', (): TypeOrmModuleOptions => ({
    type: "mssql",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10) || 1433,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
    entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
    ],
    // synchronize: true, // not for production,// if true, when db structure in code change, 
    // real db change (type warm), in production this change can lose data
    synchronize: false,
    logging: true,
    extra: { trustServerCertificate: true },
    // migrationsTableName: "Todo",
    migrations: [
        __dirname + '/../migration/*{.ts,.js}'
    ],
    cli: {
        migrationsDir: __dirname + '/../migration',
        entitiesDir: __dirname + '/../todo/entity'
    },
}))