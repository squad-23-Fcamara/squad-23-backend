import { Router } from 'express'
import { CreateUserController } from '../controllers/CreateUserController'
import { GetAllUserController } from '../controllers/GetAllUserController'
import { GetByIdUserController } from '../controllers/GetByIdUserController'

const userRoute = Router()

userRoute.post('/users/create', new CreateUserController().handle)
userRoute.get('/users', new GetAllUserController().handle)
userRoute.get('/users/:uuid', new GetByIdUserController().handle)


export { userRoute }
