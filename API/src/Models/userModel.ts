import mongoose from 'mongoose'
import usersSchema from '../Schemas/usersSchema'

const userModel = mongoose.model('User', usersSchema)

export default userModel