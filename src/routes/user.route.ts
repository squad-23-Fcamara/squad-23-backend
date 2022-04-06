import { Router } from 'express'
import { CreateUserController } from '../controllers/CreateUserController'

const userRoute = Router()

userRoute.post('/users/create', new CreateUserController().handle)

export { userRoute }
