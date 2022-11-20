import mongoose from 'mongoose'
import usersSchema from '../Schemas/usersSchema'

const UserModel = mongoose.model('User', usersSchema)

export default UserModel