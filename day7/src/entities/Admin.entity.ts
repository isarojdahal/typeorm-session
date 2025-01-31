import { Entity, PrimaryColumn } from "typeorm";
import { CommonEntity } from "./Common.entity";

@Entity()
export class Admin extends CommonEntity {}
