import { Router } from 'express'
import loginController from './controllers/loginController'
import sessionController from './controllers/sessionController'
import authMiddleware from './middlewares/auth'

const routes = Router()

routes.post("/login", loginController.create)
routes.post("/sessions", sessionController.create)
routes.use(authMiddleware)
routes.put("/login", loginController.update)
routes.get("/users", loginController.view)

export default routes