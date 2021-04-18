import bcrypt from 'bcrypt';
import { BeforeInsert, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Attendance from "./attendance"
@Entity("Users")
export default class User {
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

