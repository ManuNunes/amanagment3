import bcrypt from 'bcrypt';
import { Request, Response } from "express";
import { getCustomRepository } from 'typeorm'
import { UserRepository } from '../database/repository/userRepository';

class LoginController {
    async create(req: Request, res: Response) {
        const { nome, user, password } = req.body
        //pega a senha enviada pelo usuário e transforma em HASH
        const pass = await bcrypt.hashSync(password, 6)
        const userRepository = getCustomRepository(UserRepository)
        const createUser = userRepository.create({ nome, user, pass })
        const userExists = await userRepository.findOne({ user })

        if (userExists) {
            return res.status(400).json({ error: "Usuário já existe" });
        }

        await userRepository.save(createUser)

        return res.status(200).json({ message: "Usuário foi criado com sucesso" })
    }
}

export = new LoginController()