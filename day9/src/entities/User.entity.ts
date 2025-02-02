import {
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
} from "typeorm";
import { CommonEntity } from "./Common.entity";
import { Photo } from "./Photo.entity";
import bcrypt from "bcryptjs";

@Entity()
export class User extends CommonEntity {
  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  password: string;

  @BeforeInsert()
  _() {
    this.email = this.email.toLowerCase();
    const salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);
  }
}
