import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}

