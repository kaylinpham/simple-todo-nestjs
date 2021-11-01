import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from 'src/config/configuration';
import { DatabaseModule } from 'src/database/database.module';
import { TodoModule } from 'src/todo/todo.module';


@Module({
  imports: [TodoModule,
    DatabaseModule,
    ConfigModule.forRoot({
      envFilePath: './src/config/env/.development.env',
      load: [configuration],
      isGlobal: true,
      cache: true
    }),
  ],
})
export class AppModule {
}
