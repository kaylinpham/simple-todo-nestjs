import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { DatabaseModule } from './database/database.module';
import { TodoModule } from './todo/todo.module';
import { AppService } from './app.service';
import configuration from './config/configuration';

@Module({
  imports: [TodoModule, DatabaseModule, ConfigModule.forRoot({
    envFilePath: './src/config/env/.development.env',
    load: [configuration],
    isGlobal: true,
    cache: true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
