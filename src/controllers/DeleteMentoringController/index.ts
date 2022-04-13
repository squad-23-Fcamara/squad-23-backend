import { Request, Response } from 'express'
import { DeleteMentoringService } from '../../services/DeleteMentoringService'

class DeleteMentoringController {
  async handle(req: Request, res: Response) {
    const service = new DeleteMentoringService()
    const { uuid } = req.params
    
    try {
      await service.execute(uuid)

      res.status(200)
      res.json({msg: 'Mentoring excluded with success'})
    } catch (error) {
      res.status(400)
      res.json(error)
    }

  }
}

export { DeleteMentoringController }
