import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PollsModule } from './polls/polls.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { PollsEntity } from './entities/polls.entity';
import { AnswerEntity } from './entities/answer.entity';
config();

@Module({
  imports: [PollsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: true,
      entities: [PollsEntity, AnswerEntity]
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
