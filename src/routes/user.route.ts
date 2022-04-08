import { Router } from 'express'
import { CreateUserController } from '../controllers/CreateUserController'
import { GetAllUserController } from '../controllers/GetAllUserController'
import { GetByIdUserController } from '../controllers/GetByIdUserController'
import { UpdateUserController } from '../controllers/UpdateUserController'

const userRoute = Router()

userRoute.post('/users/create', new CreateUserController().handle)
userRoute.get('/users', new GetAllUserController().handle)
userRoute.get('/users/:uuid', new GetByIdUserController().handle)
userRoute.put('/users/:uuid', new UpdateUserController().handle)


export { userRoute }
