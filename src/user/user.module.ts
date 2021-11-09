import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DatabaseModule } from 'src/database/database.module';
import { userProviders } from './user.provider';
import { TodoUserController } from './todo.controller';
import { TodoModule } from 'src/todo/todo.module';

@Module({
  imports: [DatabaseModule, TodoModule],
  controllers: [UserController, TodoUserController],
  providers: [UserService, ...userProviders],
})
export class UserModule { }
