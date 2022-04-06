import express from 'express'
import cors from 'cors'

import { homeRoute } from './routes/home.route'
import { userRoute } from './routes/user.route'

const app = express()

app.use(cors())
app.use(express.json())

app.use(homeRoute)
app.use(userRoute)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`)
})
