import { Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { CommonEntity } from "./Common.entity";
import { Photo } from "./Photo.entity";

@Entity()
export class User extends CommonEntity {
  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  password: string;

  @OneToMany(() => Photo, (photo) => photo.user)
  photos: Photo[];
}
