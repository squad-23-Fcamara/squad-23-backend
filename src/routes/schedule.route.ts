import { Router } from 'express'
import { DeleteMentoringController } from '../controllers/DeleteMentoringController'
import { ScheduleMentoringSessionController } from '../controllers/ScheduleMentoringSessionController'

const scheduleRoutes = Router()

scheduleRoutes.post('/schedule/create', new ScheduleMentoringSessionController().handle)
scheduleRoutes.delete('/schedule/delete/:uuid', new DeleteMentoringController().handle)

export { scheduleRoutes }
