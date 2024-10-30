import { IsArray, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class PollCreateDto {

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsArray()
  @IsNotEmpty({ each: true })
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