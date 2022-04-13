import { Request, Response } from 'express'
import { CreateUserService } from '../../services/CreateUserService'

class CreateUserController {
  async handle(req: Request, res: Response) {
    const service = new CreateUserService()
    const { name, email, role, password } = req.body
    
    try {
      const user = await service.execute(
        name,
        email,
        role,
        password
      )

      res.json(user)
    } catch (error: any) {
      res.status(409)
      res.json(error.message)
    }
  }
}

export { CreateUserController }
