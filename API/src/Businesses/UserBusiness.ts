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

export default { createUser }