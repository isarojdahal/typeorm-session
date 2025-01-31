import { Column, Entity } from "typeorm";
import { CommonEntity } from "./Common.entity";

@Entity()
export class Token extends CommonEntity {
  @Column()
  value: string;

  @Column()
  user: string;
}
