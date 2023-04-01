import { Message } from "src/models/message/entities/messages.entity";
import { Entity } from "typeorm";

@Entity()
export class Review extends Message {}
