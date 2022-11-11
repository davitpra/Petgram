import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Button, Form, Input, Title } from './styled'

export function UserForm ({ onSubmit, title }) {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }
  return (
    <>
      <Title>{title}</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder='email'
          {...email}
        />
        <Input
          placeholder='password'
          type='password'
          {...password}
        />
        <Button type='submit'> {title} </Button>
      </Form>
    </>
  )
}
