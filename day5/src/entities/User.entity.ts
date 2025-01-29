import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { CommonEntity } from "./Common.entity";

@Entity()
export class User extends CommonEntity {
  @Column({ nullable: true })
  email: string;
}
