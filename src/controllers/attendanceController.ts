import { Response, Request } from 'express'
import { getCustomRepository } from 'typeorm'

import { AttendanceRepository } from '../database/repository/attendanceRepository'
import { UsersRepository } from '../database/repository/userRepository'

class AttendanceController {
  async create(req: Request, res: Response) {
    const { title, description } = req.body

    const attendanceRepository = getCustomRepository(AttendanceRepository)

    const { id } = req

    const attendance = attendanceRepository.create({ title, description, creator: id })

    try {
      await attendanceRepository.save(attendance)
      return res.json({
        message: "Atendimento criado com sucesso",
        user: id
      })
    } catch (err) {
      return res.json({
        error: "Não foi possível salvar o Atendimento :" + err
      })
    }
  }
  async view(req: Request, res: Response) {
    const { id } = req

    const userRepository = getCustomRepository(UsersRepository)
    const attendanceRepository = getCustomRepository(AttendanceRepository)

    const attendaces = await attendanceRepository.find({ where: { creator: id } })
    const user = await userRepository.findOne({ id })

    if (!attendaces || !user) {
      return res.json({ error: "Usuário não encontrado" })
    }

    return res.json({ user: user.username, attendances: [attendaces] })
  }
}
export default new AttendanceController()