import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../database/repository/userRepository";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import authConfig from './authConfig'


class SessionController {
    async create(req: Request, res: Response) {
        const { user, password } = req.body
        const userRepository = getCustomRepository(UserRepository)
        const checkUser = await userRepository.findOne({ user })

        if (!checkUser) {
            return res.status(401).json({ error: "Usuário não existe" })
        }
        const checkPass = await bcrypt.compare(password, checkUser.pass)

        if (!checkPass) {
            return res.status(401).json({ error: "Senha errada" })
        }
        const id_user = checkUser.id

        const secret = bcrypt.hashSync(id_user, 4)

        Object.assign(authConfig, {
            secret: secret
        })

        return res.json({
            user: {
                user,
                password
            },
            token: jwt.sign({ id_user }, secret, {
                expiresIn: '7d'
            }),
        })
    }
}
export = new SessionController()