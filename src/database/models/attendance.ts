import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("Attendance")
export default class Attendance {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string
  @Column()
  creator: string
  @Column()
  title: string
  @Column()
  description: string
  @CreateDateColumn()
  created_at: Date
  @CreateDateColumn()
  updated_at: Date
}