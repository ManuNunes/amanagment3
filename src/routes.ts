import { Router } from 'express'
import loginController from './controllers/LoginController'

const routes = Router()

routes.post("/login", loginController.create)

export default routes