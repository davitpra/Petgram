import React, { useContext } from 'react'
import { Context } from '../context/Context'
import { SubmitButton } from '../components/SubmitButton'
import { Meta } from '../components/Meta'

export function User () {
  const { removeAuth } = useContext(Context)
  return (
    <>
      <Meta metaTitle='Logout' title='Log Out' />
      <SubmitButton onClick={removeAuth}> Cerrar Sesion </SubmitButton>
    </>
  )
}
