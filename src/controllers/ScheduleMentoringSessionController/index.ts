import { Request, Response } from "express";
import { ScheduleMentoringSessionService } from "../../services/ScheduleMentoringSessionService";

class ScheduleMentoringSessionController {
  async handle(req: Request, res: Response) {
    const { schedule_to, mentor_id, mentored_id } = req.body
    const service = new ScheduleMentoringSessionService()

    const mentoringSession = await service.execute({schedule_to, mentor_id, mentored_id})

    res.status(201)
    res.json(mentoringSession)
  }
}

export { ScheduleMentoringSessionController }
