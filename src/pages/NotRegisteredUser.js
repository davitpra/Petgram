import React, { useContext } from 'react'
import { Context } from '../context/Context'

export function NotRegisteredUser () {
  const { activateAuth } = useContext(Context)
  return (
    <form onSubmit={activateAuth}>
      <button> Iniciar Seccion </button>
    </form>
  )
}
