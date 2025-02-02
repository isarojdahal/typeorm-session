import { AfterLoad, Column, Entity } from "typeorm";
import { CommonEntity } from "./Common.entity";

@Entity()
export class Media extends CommonEntity {
  @Column()
  name: string;

  @AfterLoad()
  _() {
    this.name = "http://localhost:8000/public/uploads/" + this.name;
  }
}
