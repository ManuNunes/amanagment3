import { Request, Response } from "express";
import { getCustomRepository } from 'typeorm';
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
    async update(req: Request, res: Response) {
        const { id } = req.params

        const { new_email } = req.body

        const userRepository = getCustomRepository(UsersRepository)

        const user = await userRepository.findOne({ id })

        if (!user) {
            return res.json({ error: "Esse usuário não existe!" })
        }
        try {
            await userRepository.update(id, { email: new_email })

            return res.json({ message: "Usuário atualizado com sucesso!" })
        } catch (err) {
            return res.json({ error: "Não foi possível atualizar o usuário" + err })
        }

    }
    async delete(req: Request, res: Response) {
        const { id } = req.params

        const userRepository = getCustomRepository(UsersRepository)

        const user = await userRepository.findOne({ id })

        if (!user) {
            return res.json({ error: "Esse usuário não existe!" })
        }
        try {
            await userRepository.delete(id)

            return res.json({ message: "usuário foi excluído!" })
        } catch (err) {
            return res.json({ error: "Não foi possível excluir o usuário" + err })
        }
    }
}

export = new UserController()