import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm";
import { CommonEntity } from "./Common.entity";
import bcrypt from "bcryptjs";

@Entity()
export class Admin extends CommonEntity {
  @Column()
  email: string;

  @Column()
  password: string;

  @BeforeInsert()
  _() {
    this.email = this.email.toLowerCase();
    const salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);
  }
}
