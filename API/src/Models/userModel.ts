import mongoose from 'mongoose'
import IUser from '../Interfaces/IUser'
import usersSchema from '../Schemas/usersSchema'

const UserModel = mongoose.model<IUser>('User', usersSchema)

export default UserModel