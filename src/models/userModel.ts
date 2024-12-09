import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { ChatMessage } from "./chatMessageModel";

@Entity("users")
export class User extends BaseEntity {
  [x: string]: any;
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: String;

  @Column()
  email: String;

  @Column()
  password: String;

  @Column()
  location: String;

  @Column()
  points: String;

  @Column()
  status: String;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @Column()
  lastConnection: Date;

  @OneToMany(() => ChatMessage, (chat) => chat.user)
  cursos: ChatMessage[];
    friendshipsAsUser1: any;
    friendshipsAsUser2: any;
}
