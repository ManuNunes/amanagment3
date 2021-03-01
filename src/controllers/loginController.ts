import { Request, Response } from "express";
import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../database/repository/userRepository';

class LoginController {
    async create(req: Request, res: Response) {
        const { nome, user, password } = req.body
        //pega a senha enviada pelo usuário e transforma em HASH
        const userRepository = getCustomRepository(UserRepository)
        const createUser = userRepository.create({ nome, user, pass: password })
        const userExists = await userRepository.findOne({ user })
        console.log(userRepository.metadata.propertiesMap)

        if (userExists) {
            return res.status(400).json({ error: "Usuário já existe" });
        }
        await userRepository.save(createUser)

        return res.status(200).json({ message: "Usuário foi criado com sucesso", createUser })
    }
    async update(req: Request, res: Response) {
        console.log(req.id)
        return res.json({ ok: true })
    }
}

export = new LoginController()