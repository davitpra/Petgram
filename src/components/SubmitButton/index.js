import React from 'react'
import { Button } from './styles'

export function SubmitButton ({ onClick, disabled, children }) {
  return (
    <Button onClick={onClick} disabled={disabled}> {children} </Button>
  )
}
