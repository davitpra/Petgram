import React, { useContext } from 'react'
import { UserForm } from '../components/UserForm'
import { Context } from '../context/Context'
import { useMuationWithGql } from '../hooks/useMutationWithGql'
import { REGISTER } from '../Constant/register'
import { LOGIN_MUTATION } from '../Constant/login'

export function NotRegisteredUser () {
  const { mutation, mutationLoading, mutationError } = useMuationWithGql(REGISTER)
  const { activateAuth } = useContext(Context)
  const onSubmit = ({ email, password }) => {
    const variables = { input: { email, password } }
    mutation({ variables })
      .then(({ data }) => {
        const { signup } = data
        activateAuth(signup)
      })
  }
  const { mutation: login, mutationLoading: loginLoading, mutationError: loginError } = useMuationWithGql(LOGIN_MUTATION)
  const onLogin = ({ email, password }) => {
    const variables = { input: { email, password } }
    login({ variables })
      .then(({ data }) => {
        const { Login } = data
        activateAuth({ Login })
      })
  }
  const errorMsg = mutationError && 'El usuario ya existe o hay algun problema'
  const errorLogin = loginError && 'usuario o contraseña incorrecto'
  return (
    <>
      <UserForm disabled={mutationLoading} error={errorMsg} title='Registrarse' onSubmit={onSubmit} />
      <UserForm disabled={loginLoading} error={errorLogin} title='IniciarSecion' onSubmit={onLogin} />
    </>
  )
}
