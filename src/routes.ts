import { Router } from 'express'
import loginController from './controllers/loginController'
import sessionController from './controllers/sessionController'
import authMiddleware from './middlewares/auth'

const routes = Router()

routes.post("/login", loginController.create)
routes.post("/sessions", sessionController.create)
routes.put("/login", authMiddleware, loginController.update)

export default routes