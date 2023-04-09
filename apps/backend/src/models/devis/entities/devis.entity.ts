import { Message } from "src/models/message/entities/messages.entity";
import { Service } from "src/models/service/entities/service.entity";
import { SubService } from "src/models/subService/entities/subService.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity()
export class Devis extends Message {
  @Column()
  nbCharacter: number;

  @Column("decimal", { nullable: true, precision: 10, scale: 4 })
  price?: number;

  @Column({ nullable: true })
  endDate?: Date;

  @ManyToOne(() => Service, {
    onDelete: "SET NULL",
    eager: true,
    nullable: true,
  })
  service?: Service;

  @ManyToOne(() => SubService, {
    onDelete: "SET NULL",
    eager: true,
    nullable: true,
  })
  subService?: SubService;
}
