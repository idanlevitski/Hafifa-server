import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  uuid: number;

  @Column()
  id: string;

  @Column()
  lastDigits: string;
}
