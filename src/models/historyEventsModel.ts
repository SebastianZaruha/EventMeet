import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { User } from "./userModel";
import { Event } from "./eventModel";

@Entity("historyEvents")
export class HistoryEvents extends BaseEntity {
  @ManyToOne(() => User, (user) => user.historyEvents, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "userId" })
  user: User;

  @Column()
  eventId: number;

  @ManyToOne(() => Event, (event) => event.historyEvents, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "eventId" })
  event: Event;

  @CreateDateColumn()
  attendanceDate: Date;
}
