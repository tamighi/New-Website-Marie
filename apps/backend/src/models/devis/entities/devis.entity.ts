import { File } from "src/models/file/entity/file.entity";
import { Message } from "src/models/message/entities/messages.entity";
import { Service } from "src/models/service/entities/service.entity";
import { SubService } from "src/models/subService/entities/subService.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";

@Entity()
export class Devis extends Message {
  @Column()
  nbCharacter: number;

  @Column({ nullable: true })
  endDate?: Date;

  @OneToOne(() => File, { nullable: true, eager: true, onDelete: "SET NULL" })
  @JoinColumn()
  file?: File;

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
