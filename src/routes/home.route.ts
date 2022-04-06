import { Router, Request, Response } from 'express';

const homeRoute = Router()

homeRoute.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Squad23 API')
})

export { homeRoute }