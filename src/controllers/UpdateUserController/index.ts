import { Request, Response } from 'express'
import { UpdateUserService } from '../../services/UpdateUserService'

class UpdateUserController {
  async handle(req: Request, res: Response) {

    const service = new UpdateUserService()
    const { uuid } = req.params
    const { mentor, skills } = req.body

    try {
      const user = await service.execute(uuid, mentor, skills)

      res.json(user)
    } catch (error: any) {
      res.status(400)
      res.json(error.message)
    }
  }
}

export { UpdateUserController }