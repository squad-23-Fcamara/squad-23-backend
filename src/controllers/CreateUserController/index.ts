import { Request, Response } from 'express'
import { CreateUserService, IUserProps } from '../../services/CreateUserService'
import { Encrypter } from '../../utils/encrypter'

class CreateUserController {
  async handle(req: Request, res: Response) {
    const encrypter = new Encrypter()
    const service = new CreateUserService()
    const { email, mentor, name, password } = req.body as IUserProps

    if(!email || !mentor || !name || !password){
      res.send('Missing params on request').sendStatus(400).end()
    }
    const hashedPassword = encrypter.encrypt(password)

    const user = await service.execute({
      email,
      mentor,
      name,
      password: hashedPassword
    })
    
    res.json(user).sendStatus(200)
  }
}
