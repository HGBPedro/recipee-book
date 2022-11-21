import dotenv from 'dotenv'
import express from 'express'
import databaseConnect from './configs/connection'
import logger from './configs/pino-pretty'
import userRouter from './Routers/UserRouter'

dotenv.config()

if (!process.env.PORT) {
  logger.error('Porta não encontrada')
  process.exit(1)
}

const PORT = parseInt(process.env.PORT)

const app = express()

app.use('/', userRouter)

app.listen(PORT, () => {
  databaseConnect()

  logger.info(`Running on port ${PORT}`)
})
