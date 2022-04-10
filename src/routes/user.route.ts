import { Router } from 'express'
import { CreateUserController } from '../controllers/CreateUserController'
import { GetMentorsBySkillsController } from '../controllers/GetMentorsBySkillsController'
import { GetByIdUserController } from '../controllers/GetByIdUserController'
import { UpdateUserController } from '../controllers/UpdateUserController'

const userRoute = Router()

userRoute.post('/users/create', new CreateUserController().handle)
userRoute.get('/mentors/:skills', new GetMentorsBySkillsController().handle)
userRoute.get('/users/:uuid', new GetByIdUserController().handle)
userRoute.put('/users/:uuid', new UpdateUserController().handle)


export { userRoute }
