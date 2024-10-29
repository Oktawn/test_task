import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AnswerEntity } from 'src/entities/answer.entity';
import { PollsEntity } from 'src/entities/polls.entity';
import { Repository } from 'typeorm';
import { PollCreateDto, VoteDto } from './polls.dto';

@Injectable()
export class PollsService {
  constructor(
    @InjectRepository(PollsEntity) private pollsRep: Repository<PollsEntity>,
    @InjectRepository(AnswerEntity) private answerRep: Repository<AnswerEntity>
  ) { }

  async allPolls() {
    const polls = await this.pollsRep.find();
    return { polls };
  }

  async getOnePoll(id: number) {
    const poll = await this.pollsRep.findOne({ where: { id } });
    const ans = await this.answerRep.find({ where: { poll: { id } } });
    if (!poll)
      throw new BadRequestException('Poll not found');
    return { poll, ans };
  }

  async createPoll(body: PollCreateDto) {
    const poll = this.pollsRep.create({ title: body.title });
    await this.pollsRep.save(poll);

    const ans = this.answerRep.create(body.answer.map(a => ({ answer: a, ans_count: 0, poll: { id: poll.id } })));
    await this.answerRep.save(ans);
  }

  async voteAnswer(body: VoteDto) {
    const ans = await this.answerRep.findOne({ where: { id: body.idPoll } });
    if (!ans)
      throw new BadRequestException('Poll not found');
    ans.ans_count++;
    await this.answerRep.save(ans);
  }

  async deletePoll(id: number) {
    const poll = await this.pollsRep.findOne({ where: { id } });
    if (!poll)
      throw new BadRequestException('Poll not found');
    await this.pollsRep.delete(poll);
  }

}
