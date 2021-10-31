import { ConfigService } from "@nestjs/config";
import { createConnection } from "typeorm";

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async (configService: ConfigService) => await createConnection(configService.get('database')),
        inject: [ConfigService]
    },
];
