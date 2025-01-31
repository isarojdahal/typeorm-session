import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { CommonEntity } from "./Common.entity";
import { User } from "./User.entity";

@Entity()
export class Photo extends CommonEntity {
  @Column()
  url: string;

  @ManyToOne(() => User, (user) => user.photos, {
    onDelete: "CASCADE",
  })
  user: User;
}
