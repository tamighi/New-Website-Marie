import { Column, CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";

export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  message: string;

  @Column({ nullable: true })
  name?: string;

  @Column({ nullable: true })
  email?: string;

  @CreateDateColumn()
  date: Date;
}
