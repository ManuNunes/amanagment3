import { Request, Response } from "express";
import { getCustomRepository, UsingJoinTableIsNotAllowedError } from 'typeorm';
import { UsersRepository } from '../database/repository/userRepository';

class UserController {
    async create(req: Request, res: Response) {

        const { username, email, password } = req.body

        const userRepository = getCustomRepository(UsersRepository)

        const userExists = await userRepository.findOne({ email })

        if (userExists) {
            return res.status(400).json({ error: "E-mail já cadastrado" })
        }

        const createUser = userRepository.create({ username, email, pass: password })

        try {
            await userRepository.save(createUser)

            return res.status(200).json({
                message: "Usuário Criado com sucesso",
                user: createUser.email, id: createUser.id
            })

        } catch (err) {
            return res.status(401).json({ error: "Não foi possível salvar o usuário" })
        }
    }
}

export = new UserController()