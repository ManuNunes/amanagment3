import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Attendance")
export default class Attendance {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string
  @Column()
  user_id: string
  @Column()
  title: string
  @Column()
  description: string
  @CreateDateColumn()
  created_at: Date
  @CreateDateColumn()
  updated_at: Date
}