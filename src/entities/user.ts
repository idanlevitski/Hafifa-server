import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  uuid: number;

  @Column()
  id: string;

  @Column()
  lastDigit: string;
}
