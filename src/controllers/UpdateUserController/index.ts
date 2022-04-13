import { Request, Response } from 'express'
import { IUserProps } from '../../@types/Interfaces/IUserProps'
import { UpdateUserService } from '../../services/UpdateUserService'

class UpdateUserController {
  async handle(req: Request, res: Response) {

    const service = new UpdateUserService()
    const { uuid } = req.params
    const { ...props }: IUserProps = req.body 

    try {
      if (Object.values(props).some((item) => item === null)){
        // Valida se recebemos algum dado como null, não é permitido
        res.status(400)
        throw new Error(`You have passed null propertys and it's not possible`)
      }

      if (Object.values(props).every((item) => item === undefined)){
        // Valida se o body da requisição veio vazio, não é permitido
        res.status(400)
        throw new Error(`Missing body of request`)
      }

      if (Object.values(props).some((item) => item.length === 0)){
        // Impede que strings e arrays vazios sejam enviadas ao banco de dados
        res.status(400)
        throw new Error(`Invalid param on request`)
      }

      const user = await service.execute(uuid, props)

      res.json(user)
    } catch (error: any) {
      res.status(400)
      res.json(error.message)
    }
  }
}

export { UpdateUserController }
