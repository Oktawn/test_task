import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { PollsEntity } from "./polls.entity";

@Entity('answer')
export class AnswerEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  answer: string;

  @Column()
  ans_count: number;

  @ManyToOne(() => PollsEntity, (poll) => poll.answers)
  poll: PollsEntity;

}