import { Router } from 'express'
import { ScheduleMentoringSessionController } from '../controllers/ScheduleMentoringSessionController'

const scheduleRoutes = Router()

scheduleRoutes.post('/schedule/create', new ScheduleMentoringSessionController().handle)

export { scheduleRoutes }