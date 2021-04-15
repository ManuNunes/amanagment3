import { Request, Response } from "express";
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../database/repository/userRepository';
import jwt from 'jsonwebtoken'

class LoginController {
    async create(req: Request, res: Response) {

        const { username, email, password } = req.body

        const userRepository = getCustomRepository(UsersRepository)

        const userExists = await userRepository.findOne({ username })

        if (userExists) {
            return res.status(400).json({ error: "Usuário já existe" })
        }

        const createUser = userRepository.create({ username, email, pass: password })

        try {
            await userRepository.save(createUser)

            return res.status(200).json({
                message: "Usuário Criado com sucesso",
                user: createUser.username, id: createUser.id
            })

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
        const user = await userRepository.findOne({ username: "msnm" })

        return res.json({ user })
    }
    async delete(req: Request, res: Response) {
        return res.json({ token: null })
    }
}

export = new LoginController()