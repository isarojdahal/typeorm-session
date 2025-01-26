import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";
import { CommonEntity } from "./Common.entity";

@Entity({ name: "userTable" })
export class User extends CommonEntity {
  @Column({ type: "varchar", length: 255, name: "userName", nullable: true })
  username: string;

  @Column({ nullable: true })
  email: string;
}
