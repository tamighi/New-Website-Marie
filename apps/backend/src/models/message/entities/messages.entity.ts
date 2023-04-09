import { Column, CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";
import { Status } from "../dtos/messages.dto";

export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  message: string;

  @Column({ nullable: true })
  name?: string;

  @Column({ nullable: true })
  email?: string;

  @Column({
    type: "enum",
    enum: Status,
    default: Status.PENDING,
  })
  status: Status;

  @CreateDateColumn()
  date: Date;
}
