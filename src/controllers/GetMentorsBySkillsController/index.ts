import { Request, Response } from 'express'
import { GetMentorsBySkillsService } from '../../services/GetMentorsBySkillsService'

class GetMentorsBySkillsController {
  async handle(req: Request, res: Response) {
    try {
      const service = new GetMentorsBySkillsService()
      const { skills } = req.params
      const arrSkills = skills.toLowerCase().split(',')
      const mentors = await service.execute(arrSkills)
      
      res.status(200)
      res.json(mentors)
    } catch (error) {
      res.status(500)
      res.json(error)
    }
  }
}

export { GetMentorsBySkillsController }
