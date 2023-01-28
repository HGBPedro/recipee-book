import React from 'react'

function Login() {

  const onSubmit = (values: React.SyntheticEvent) => {
    console.log(values)
  }
  return (
    <div className="login-screen">
    <form onSubmit={onSubmit}>
      <label htmlFor='login'>E-Mail</label>
      <input name='login' type="text" />

      <label htmlFor='login'>Senha</label>
      <input name='password' type="password" />

      <button type='submit'>Enviar</button>
    </form>
    </div>
  )
}

export default Login