import bcrypt from 'bcrypt';
import { v4 } from 'uuid'
import { BeforeInsert, Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
@Entity()
export default class Users {
  @PrimaryColumn("uuid")
  id: string
  @Column()
  username: string
  @Column()
  email: string
  @Column()
  pass: string
  @CreateDateColumn()
  created_at: Date
  @CreateDateColumn()
  updated_at: Date

  @BeforeInsert()
  createNeeded() {
    if (!this.id) {
      this.id = v4()
    }
    if (this.pass) {
      this.pass = bcrypt.hashSync(this.pass, 6)
    }
  }

}

