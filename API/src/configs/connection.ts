import mongoose from 'mongoose'
import logger from './pino-pretty'

export const connUrl= `mongodb+srv://${process.env.MONGODB_CLUSTER_USERNAME}:${process.env.MONGODB_CLUSTER_PASSWORD}@recipee-book-cluster.0iytwlr.mongodb.net/RecipeeBook`

const databaseConnect = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_CLUSTER_USERNAME}:${process.env.MONGODB_CLUSTER_PASSWORD}@recipee-book-cluster.0iytwlr.mongodb.net/RecipeeBook`)
    return logger.info('DATABASE CONNECTED')
  } catch (err) {
    return logger.error(err)
  }
}

export default databaseConnect