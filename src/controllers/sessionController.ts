import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../database/repository/userRepository";
import bcrypt from 'bcrypt'



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
        return res.status(200).json({ message: "Login Realizado com sucesso!" })
    }
}
export = new SessionController()