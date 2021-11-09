import { AppUser } from "src/entity/user.entity";
import { Connection } from "typeorm";

export const userProviders = [{
    provide: 'USER_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(AppUser),
    inject: ['DATABASE_CONNECTION'],
}]