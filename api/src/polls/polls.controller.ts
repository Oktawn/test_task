import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { PollsService } from './polls.service';
import { PollCreateDto, VoteDto } from './polls.dto';

@Controller('api/polls')
export class PollsController {
  constructor(private readonly pollsService: PollsService) { }

  @Get()
  async getPolls() {
    return this.pollsService.allPolls();
  }

  @Get(':id')
  async getPoll(@Param('id', ParseIntPipe) id: number) {
    return this.pollsService.getOnePoll(id);
  }

  @Post()
  async createPoll(@Body() body: PollCreateDto) {
    return this.pollsService.createPoll(body);
  }
  @Post(':id/vote?:idAnswer')
  async vote(@Param('id', ParseIntPipe) id: number, @Query('idAnswer', ParseIntPipe) idAnswer: number) {
    const vote: VoteDto = {
      idPoll: id,
      idAnswer: idAnswer
    }
    return this.pollsService.voteAnswer(vote);
  }


  @Delete(':id')
  deletePoll(@Param('id', ParseIntPipe) id: number) {
    return this.pollsService.deletePoll(id);
  }
}
