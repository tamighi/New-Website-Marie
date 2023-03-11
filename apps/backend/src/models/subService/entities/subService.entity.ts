import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SubService {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  textType: string;

  @Column("decimal", {
    transformer: {
      to(value) {
        return value;
      },
      from(value) {
        return parseFloat(value);
      },
    },
  })
  pricePerCharacter: number;
}
