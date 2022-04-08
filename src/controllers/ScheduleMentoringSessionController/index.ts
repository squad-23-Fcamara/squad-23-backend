import { Request, Response } from "express";
import { ScheduleMentoringSessionService } from "../../services/ScheduleMentoringSessionService";

class ScheduleMentoringSessionController {
  async handle(req: Request, res: Response) {
    const { schedule_to,
            mentor_id,
            mentored_id,
            notes,
            theme,
            platform
          } = req.body
    const service = new ScheduleMentoringSessionService()

    try {
      const mentoringSession = await service.execute({
        schedule_to,
        mentor_id,
        mentored_id,
        notes,
        theme,
        platform
      })

      res.status(201)
      res.json(mentoringSession)
    } catch (error: any) {
      res.status(400)
      return error.message
    }
    
  }
}

export { ScheduleMentoringSessionController }
