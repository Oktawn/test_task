import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { AnswerEntity } from "./answer.entity";

@Entity("polls")
export class PollsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  title: string;

  @OneToMany(() => AnswerEntity, (answer) => answer.poll)
  answers: AnswerEntity[]
}