import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SubService {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;
}
