import mongoose from 'mongoose'
import logger from './pino-pretty'

const databaseConnect = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_CLUSTER_USERNAME}:${process.env.MONGODB_CLUSTER_PASSWORD}@recipee-book-cluster.0iytwlr.mongodb.net/RecipeeBook?retryWrites=true&w=majority`)
    return logger.info('DATABASE CONNECTED')
  } catch (err) {
    return logger.error(err)
  }
}

export default databaseConnect