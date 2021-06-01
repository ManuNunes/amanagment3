<<<<<<< HEAD

=======
import 'dotenv'
>>>>>>> 1d582b5675941f585f6ecea74c10d0e05979a37b
import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../database/repository/userRepository";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


class SessionController {
    async create(req: Request, res: Response) {
        const { email, password } = req.body

        const userRepository = getCustomRepository(UsersRepository)

        const checkEmail = await userRepository.findOne({ email })

        if (!checkEmail) {
            return res.status(401).json({ error: "Usuário não existe" })
        }
        const checkPass = await bcrypt.compare(password, checkEmail.pass)

        if (!checkPass) {
            return res.status(401).json({ error: "Senha errada" })
        }
        const id_user = checkEmail.id

        return res.json({
            user: {
                email,
                password
            },
            token: jwt.sign({ id_user }, process.env.SECRET_TOKEN, {
                expiresIn: '7d'
            }),
        })
    }
}
export = new SessionController()