import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'

export function UserForm ({ onSubmit }) {
  const email = useInputValue('')
  const password = useInputValue('')

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit()
      }}
    >
      <input
        placeholder='email'
        {...email}
      />
      <input
        placeholder='password'
        type='password'
        {...password}
      />
      <button type='submit'> Iniciar Seccion </button>
    </form>
  )
}
