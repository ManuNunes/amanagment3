import bcrypt from 'bcrypt';
import { BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Users")
export default class User {
    @PrimaryGeneratedColumn("uuid")
    readonly id: string
    @Column()
    nome: string
    @Column()
    user: string
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

