import {
  BaseEntity,
  Column,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CommonEntity } from "./Common.entity";

@Entity()
export class User extends CommonEntity {
  @Column({ nullable: true })
  email: string;
}
