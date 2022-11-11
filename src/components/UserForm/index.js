import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Button, Form, Input, Title, Error } from './styled'

export function UserForm ({ disabled, error, onSubmit, title }) {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }
  return (
    <>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input
          disabled={disabled}
          placeholder='email'
          {...email}
        />
        <Input
          disabled={disabled}
          placeholder='password'
          type='password'
          {...password}
        />
        <Button type='submit'> {title} </Button>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  )
}
