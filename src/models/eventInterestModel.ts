import { BaseEntity, Entity } from "typeorm";
import { Column, ManyToOne, JoinColumn } from "typeorm";
import { Event } from "./eventModel";
import { Interest } from "./interestModel";

@Entity("eventInterest")
export class EventInterest extends BaseEntity {
  @Column()
  eventId: number;

  @Column()
  interestId: number;

  @ManyToOne(() => Event, (event: Event) => event.eventInterest, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "eventId" })
  event: Event;

  @ManyToOne(() => Interest, (interest: Interest) => interest.eventInterest, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "interestId" })
  interest: Interest;
}
