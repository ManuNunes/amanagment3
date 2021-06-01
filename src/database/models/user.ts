import bcrypt from 'bcrypt';
import uuid from 'uuid'
import { BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity("Users")
export default class Users {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string
  @Column()
  username: string
  @Column()
  email: string
  @Column()
  pass: string
  @CreateDateColumn()
  created_at: Date

  @BeforeInsert()
  createHash() {
    if (this.pass) {
      this.pass = bcrypt.hashSync(this.pass, 6)
    }
  }

}

