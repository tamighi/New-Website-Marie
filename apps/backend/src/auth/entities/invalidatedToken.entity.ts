import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class InvalidatedToken {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  token: string;

  @Column()
  expires: Date;
}
