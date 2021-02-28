import { Router } from 'express'
import loginController from './controllers/loginController'
import sessionController from './controllers/sessionController'

const routes = Router()

routes.post("/login", loginController.create)
routes.post("/session", sessionController.create)

export default routes