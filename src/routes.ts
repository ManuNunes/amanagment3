import { Router } from 'express'
import UserController from './controllers/userController'
import sessionController from './controllers/sessionController'
import attendanceController from './controllers/attendanceController'
import authMiddleware from './middlewares/auth'

const routes = Router()

routes.post("/register", UserController.create)
routes.post("/sessions", sessionController.create)
routes.use(authMiddleware)
routes.post("/attendance", attendanceController.create)
routes.get("/attendance", attendanceController.view)
routes.put("/users/:id", UserController.update)
routes.delete("/users/:id", UserController.delete)

export default routes