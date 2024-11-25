import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class idNumber {
  @PrimaryGeneratedColumn()
  uuid: number;

  @Column()
  id: string;

  @Column()
  lastDigit: string;
}
