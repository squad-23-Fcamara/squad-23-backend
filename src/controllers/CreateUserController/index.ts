import { Request, Response } from 'express'
import { CreateUserService } from '../../services/CreateUserService'
import { Encrypter } from '../../utils/encrypter'

class CreateUserController {
  async handle(req: Request, res: Response) {
    const encrypter = new Encrypter()
    const service = new CreateUserService()
    const { name, email, role, password } = req.body as public_users

    if (!name || !email || !role || !password) {
      res.status(400)
      res.send({
        error: 'Missing Param'
      })
      return
    }
    const hashedPassword = encrypter.encrypt(password)

    try {
      const user = await service.execute({
        name,
        email,
        password: hashedPassword
      })

      res.json(user)
    } catch (error: any) {
      res.status(409)
      res.json(error.message)
    }
  }
}

export { CreateUserController }
