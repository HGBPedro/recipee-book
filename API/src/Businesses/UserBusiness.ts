import { FilterQuery, ProjectionType, QueryOptions, Types } from 'mongoose';
import IUser from '../Interfaces/IUser';
import UserModel from '../Models/userModel'

async function createUser (user: IUser) {
  try {
    await UserModel.create(user,  (error, user) => {
      if (error) throw error

      return user
    })
  } catch (err) {
    return err
  }
}

async function findUser(filter: FilterQuery<IUser>, projection?: ProjectionType<IUser>, options?: QueryOptions<IUser>) {
  try {
    await UserModel.find(filter, projection, options, (err, docs) => {
      if (err) throw err

      return docs
    })
  } catch (err) {
    console.log(err)
    return err
  }
}

export default { createUser, findUser }
