import dotenv from 'dotenv'
import express from 'express'
import databaseConnect from './configs/connection'
import logger from './configs/pino-pretty'
import expressSession from 'express-session'
import MongoStore from 'connect-mongo'
import recipeRouter from './Routers/RecipeRouter'

dotenv.config()

if (!process.env.PORT) {
  logger.error('Porta não encontrada')
  process.exit(1)
}

const PORT = parseInt(process.env.PORT)

const app = express()

app.use(express.json())
app.use(express.static('public'))

app.use(expressSession({
  secret: 'keyboard cat',
  resave: false,
  name: 'recipeUserSession',
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: `mongodb+srv://${process.env.MONGODB_CLUSTER_USERNAME}:${process.env.MONGODB_CLUSTER_PASSWORD}@recipee-book-cluster.0iytwlr.mongodb.net/RecipeeBook`
  })
}))

app.use('/recipes', recipeRouter)

app.listen(PORT, () => {
  databaseConnect()

  logger.info(`Running on port ${PORT}`)
})
