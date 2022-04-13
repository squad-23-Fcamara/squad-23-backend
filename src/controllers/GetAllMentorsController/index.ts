import { Request, Response } from 'express'
import { GetAllMentorsService } from '../../services/GetAllMentorsService'

class GetAllMentorsController {
  async handle(req: Request, res: Response) {
    try {
      const service = new GetAllMentorsService()
      const mentors = await service.execute()
      
      res.status(200)
      res.json(mentors)
    } catch (error) {
      res.status(500)
      res.json(error)
    }
  }
}

export { GetAllMentorsController }
