import { ConfigService } from "@nestjs/config";
import connectionOptions from "src/config/database.config";
import { createConnection } from "typeorm";

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async (configService: ConfigService) => await createConnection(connectionOptions),
        inject: [ConfigService]
    },
];
