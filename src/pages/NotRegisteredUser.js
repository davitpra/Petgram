import React, { useContext } from 'react'
import { UserForm } from '../components/UserForm'
import { Context } from '../context/Context'

export function NotRegisteredUser () {
  const { activateAuth } = useContext(Context)
  return (
    <UserForm onSubmit={activateAuth} />
  )
}
