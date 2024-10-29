import { Module } from '@nestjs/common';
import { PollsService } from './polls.service';
import { PollsController } from './polls.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnswerEntity } from 'src/entities/answer.entity';
import { PollsEntity } from 'src/entities/polls.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PollsEntity, AnswerEntity])],
  controllers: [PollsController],
  providers: [PollsService],
})
export class PollsModule { }
