import { BaseEntity, PrimaryGeneratedColumn } from "typeorm";

export class CommonEntity extends BaseEntity {
  // @PrimaryColumn()

  @PrimaryGeneratedColumn("uuid")
  id: number;

  // update, insert.
}
