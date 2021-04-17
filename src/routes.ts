import { Router } from 'express'
import UserController from './controllers/userController'
import sessionController from './controllers/sessionController'
import authMiddleware from './middlewares/auth'

const routes = Router()

routes.post("/login", UserController.create)
routes.post("/sessions", sessionController.create)
routes.use(authMiddleware)
routes.post("/logout", sessionController.delete)

export default routes