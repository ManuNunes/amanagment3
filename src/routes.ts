import { Router } from 'express'
import loginController from './controllers/loginController'

const routes = Router()

routes.post("/login", loginController.create)

export default routes