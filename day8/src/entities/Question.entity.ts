import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Category } from "./Category.entity";
import { CommonEntity } from "./Common.entity";

@Entity()
export class Question extends CommonEntity {
  @Column()
  title: string;

  @Column()
  text: string;

  @ManyToMany(() => Category)
  @JoinTable()
  categories: Category[];
}
