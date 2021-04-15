import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../database/repository/userRepository";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


class SessionController {
    async create(req: Request, res: Response) {
        const { email, password } = req.body
        const userRepository = getCustomRepository(UsersRepository)
        const checkUser = await userRepository.findOne({ email })

        if (!checkUser) {
            return res.status(401).json({ error: "Usuário não existe" })
        }
        const checkPass = await bcrypt.compare(password, checkUser.pass)

        if (!checkPass) {
            return res.status(401).json({ error: "Senha errada" })
        }
        const id_user = checkUser.id

        const secret = bcrypt.hashSync(id_user, 6)

        return res.json({
            user: {
                email,
                password
            },
            token: jwt.sign({ id_user }, process.env.TOKEN_SECRET, {
                expiresIn: '7d'
            }),
        })
    }
}
export = new SessionController()