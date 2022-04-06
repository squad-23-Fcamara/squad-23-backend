import { Request, Response } from 'express'
import { CreateUserService, IUserProps } from '../../services/CreateUserService'
import { Encrypter } from '../../utils/encrypter'

class CreateUserController {
  async handle(req: Request, res: Response) {
    const encrypter = new Encrypter()
    const service = new CreateUserService()
    const { email, mentor, name, password } = req.body as IUserProps

    if (!email || mentor === undefined || mentor === null  || !name || !password) {
      res.status(400)
      res.send({
        error: 'Missing Param'
      })
      return
    }
    const hashedPassword = encrypter.encrypt(password)

    try {
      const user = await service.execute({
        email,
        mentor,
        name,
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
