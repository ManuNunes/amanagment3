import { BeforeInsert, Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { v4 } from 'uuid'
@Entity()
export default class Attendance {
  @PrimaryColumn("uuid")
  id: string
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

  @BeforeInsert()
  createNeeded() {
    if (!this.id) {
      this.id = v4()
    }
  }
}