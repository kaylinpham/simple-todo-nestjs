// import { registerAs } from "@nestjs/config";
// import { TypeOrmModuleOptions } from "@nestjs/typeorm"
import { ConnectionOptions } from "typeorm";

// export default registerAs('database', (): TypeOrmModuleOptions => ({
//     type: "mssql",
//     host: process.env.DB_HOST,
//     port: parseInt(process.env.DB_PORT, 10) || 1433,
//     username: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB,
//     synchronize: false,
//     logging: true,
//     extra: { trustServerCertificate: true },
//     migrations: [
//         __dirname + '/../**/migration/*{.ts,.js}'
//     ],
//     entities: [
//         __dirname + '/../**/*.entity{.ts,.js}',
//     ],
//     cli: {
//         migrationsDir: process.env.TYPEORM_MIGRATIONS_DIR,
//         entitiesDir: process.env.TYPEORM_ENTITIES_DIR
//     },
// }))

const connectionOptions: ConnectionOptions = {
    type: "mssql",
    host: "localhost",
    port: 1433,
    username: "sa",
    password: "0147896325phg",
    database: "Todo",
    synchronize: false,
    logging: true,
    extra: { trustServerCertificate: true },
    migrations: [
        __dirname + '/../**/migration/*{.ts,.js}'
    ],
    entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
    ],
    cli: {
        migrationsDir: 'src/migration',
        entitiesDir: 'src/entity'
    },
}

// module.exports = connectionOptions
export default connectionOptions

// synchronize: true, // not for production,// if true, when db structure in code change, 
    // real db change (type warm), in production this change can lose data