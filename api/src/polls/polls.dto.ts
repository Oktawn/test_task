import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class PollCreateDto {

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  answer: string[];
}

export class VoteDto {

  @IsNumber()
  @IsNotEmpty()
  idPoll: number;

  @IsNumber()
  @IsNotEmpty()
  idAnswer: number;
}