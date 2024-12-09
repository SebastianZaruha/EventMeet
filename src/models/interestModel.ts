import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("interest")
export class Interest extends BaseEntity {
  [x: string]: any;
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tag: String;
}
