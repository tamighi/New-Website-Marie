import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  identifier: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  lastModified: Date;
}
