import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { TodoController } from './todo.controller';
import { todoProviders } from './todo.providers';
import { TodoService } from './todo.service';

@Module({ imports: [DatabaseModule], controllers: [TodoController], providers: [TodoService, ...todoProviders] })
export class TodoModule { }
