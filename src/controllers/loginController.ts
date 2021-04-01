import { Request, Response } from "express";
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../database/repository/userRepository';

class LoginController {
    async create(req: Request, res: Response) {
        const { nome, user, password } = req.body

        const userRepository = getCustomRepository(UsersRepository)

        const userExists = userRepository.findOne({ user })

        if (userExists) {
            return res.status(400).json({ error: "Usuário já existe" })
        }

        const createUser = userRepository.create({ nome, user, pass: password })

        try {
            await userRepository.save(createUser)

            return res.status(200).json({ message: "Usuário Criado com sucesso", user: createUser.nome, id: createUser.id })
        } catch (err) {
            return res.status(401).json({ error: "Não foi possível salvar o usuário" })
        }
    }
    async update(req: Request, res: Response) {
        const { new_user } = req.body
        const userRepository = getCustomRepository(UsersRepository)
        const user_id = req.id

        const user = await userRepository.find({ id: user_id })

        const dados = await Object.values(user)

        console.log(dados)

    }
    async view(req: Request, res: Response) {
        const userRepository = getCustomRepository(UsersRepository)
        const user = await userRepository.findOne({ user: "msnm" })

        return res.json({ user })
    }
}

export = new LoginController()