import {
  BaseEntity,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./userModel";
import { Interest } from "./interestModel";

@Entity("userInterest")
export class userInterest extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.userInterests, { onDelete: "CASCADE" })
  user: User;

  @ManyToOne(() => Interest, (interest) => interest.userInterests, {
    onDelete: "CASCADE",
  })
  interest: Interest;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
