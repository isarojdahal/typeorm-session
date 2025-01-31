import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { CommonEntity } from "./Common.entity";
import { UserDetails } from "./UserDetails.entity";

@Entity()
export class User extends CommonEntity {
  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  password: string;
}
