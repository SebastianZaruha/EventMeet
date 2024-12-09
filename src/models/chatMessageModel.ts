import {
  Column,
  CreateDateColumn,
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { User } from "./userModel";

@Entity("chatMessage")
export class ChatMessage extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.chatMessage)
  @JoinColumn({ name: "sender_id" })
  user: User;

  @ManyToOne(() => User, (user) => user.chatMessage)
  @JoinColumn({ name: "receiver_id" })
  receiver: User;

  @Column("content")
  descripcion: String;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
