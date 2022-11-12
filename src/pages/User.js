import React, { useContext } from 'react'
import { Context } from '../context/Context'
import { SubmitButton } from '../components/SubmitButton'

export function User () {
  const { removeAuth } = useContext(Context)
  return (
    <>
      <h2>User</h2>
      <SubmitButton onClick={removeAuth}> Cerrar Sesion </SubmitButton>
    </>
  )
}
