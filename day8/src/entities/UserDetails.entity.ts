import {
  Entity,
  PrimaryColumn,
  Column,
  BaseEntity,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { CommonEntity } from "./Common.entity";
import { User } from "./User.entity";

@Entity()
export class UserDetails extends CommonEntity {
  @Column()
  fullName: string;

  @Column()
  address: string;

  @Column({ nullable: true })
  salary: number;
}
