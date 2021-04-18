import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./user";

@Entity("Attendance")
export default class Attendance {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string
  @ManyToOne(() => User, user => user.attendances)
  creator: User
  @Column()
  title: string
  @Column()
  description: string
  @CreateDateColumn()
  created_at: Date
  @CreateDateColumn()
  updated_at: Date
}