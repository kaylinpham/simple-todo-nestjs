import { Connection } from "typeorm";
import { Todo } from "../entity/todo.entity";

export const todoProviders = [{
    provide: 'TODO_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Todo),
    inject: ['DATABASE_CONNECTION'],
}]