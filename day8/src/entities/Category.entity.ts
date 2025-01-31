import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { CommonEntity } from "./Common.entity";

@Entity()
export class Category extends CommonEntity {
  @Column()
  name: string;
}
