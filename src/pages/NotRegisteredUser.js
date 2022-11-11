import React, { useContext } from 'react'
import { UserForm } from '../components/UserForm'
import { Context } from '../context/Context'
import { useMuationWithGql } from '../hooks/useMutationWithGql'
import { REGISTER } from '../Constant/register'

export function NotRegisteredUser () {
  const { mutation } = useMuationWithGql(REGISTER)
  const { activateAuth } = useContext(Context)
  const onSubmit = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    mutation({ variables })
      .then(activateAuth())
  }
  return (
    <>
      <UserForm title='Registrarse' onSubmit={onSubmit} />
      <UserForm title='IniciarSecion' onSubmit={activateAuth} />
    </>
  )
}
