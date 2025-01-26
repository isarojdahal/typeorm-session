import { Entity, PrimaryColumn, Column, BaseEntity } from "typeorm";
import { CommonEntity } from "./Common.entity";

@Entity()
export class UserDetails extends CommonEntity {
  @Column()
  fullName: string;
}
