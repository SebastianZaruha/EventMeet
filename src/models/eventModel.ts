import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Company } from "./companyModel";
import { HistoryEvents } from "./historyEventsModel";

@Entity("event")
export class Event extends BaseEntity {
  [x: string]: any;
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: String;

  @Column()
  description: String;

  @Column({ nullable: false })
  date: Date;

  @Column({ nullable: false })
  hour: Date;

  @Column()
  location: String;

  @Column()
  status: Enumerator;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
  @ManyToOne(() => Company, { onDelete: "CASCADE" })
  @JoinColumn({ name: "companyId" })
  company: Company;

  @Column({ nullable: false })
  companyId: number;

  @OneToMany(() => HistoryEvents, (historyEvents) => historyEvents.event)
  historyEvents: HistoryEvents[];
}
