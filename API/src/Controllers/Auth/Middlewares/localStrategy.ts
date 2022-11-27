import UserBusiness from '../../../Businesses/UserBusiness'
import crypto from 'crypto'
import passport from 'passport'
import Local from 'passport-local'
import IUser from '../../../Interfaces/IUser'

passport.use(new Local.Strategy({
  usernameField: 'email',
  passwordField: 'senha',
  session: false
},async function verify(username: string, password: string, callback: Function){
  const user: any = await UserBusiness.findUser({ email: username })

  if(!user) return callback(null, false, { message: 'Usuário não existe' }) 

  crypto.pbkdf2(password, user.salt, 310000, 32, 'sha256', function(err, hashedPassword) {
    if (err) {console.log(err); return callback(err)}

    if (!crypto.timingSafeEqual(user.senha, hashedPassword)) {
      return callback(null, false, { message: 'Incorrect username or password.' });
    }

    console.log('passou pela verificacao')

    return callback(null, user)
  })
}))

export default passport