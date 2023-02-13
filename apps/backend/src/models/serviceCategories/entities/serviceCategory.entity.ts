import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class ServiceCategory {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  description: string
}
