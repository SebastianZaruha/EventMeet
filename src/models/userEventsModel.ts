import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { User } from "./userModel";
import { Event } from "./eventModel";

@Entity("userEvents")
export class UserEvents extends BaseEntity {
  @Column()
  attended: Boolean;

  @Column()
  pointsEarned: Number;

  @PrimaryColumn()
  userId: number;

  @ManyToOne(() => User, (user) => user.userEvents, { onDelete: "CASCADE" })
  @JoinColumn({ name: "userId" })
  user: User;

  @PrimaryColumn()
  eventId: number;

  @ManyToOne(() => Event, (event) => event.userEvents)
  @JoinColumn({ name: "eventId" })
  event: Event;
  model: User;
  key: "id";
}
