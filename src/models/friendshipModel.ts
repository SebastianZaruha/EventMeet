import {
  BaseEntity,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./userModel";

@Entity("friendship")
export class Frienship extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.friendshipsAsUser1, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "userId1" })
  userId1: User;

  @ManyToOne(() => User, (user) => user.friendshipsAsUser2, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "userId2" })
  userId2: User;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
