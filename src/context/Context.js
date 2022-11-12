import React, { createContext, useState } from 'react'
import { useApolloClient } from '@apollo/client'
import { useSesionStorage } from '../hooks/useSesionStorage'

export const Context = createContext()

export function ContextProvider ({ children }) {
  const [storedValue, setLocalStorage] = useSesionStorage('token', '')
  const [isAuth, setIsAuth] = useState(storedValue || null)

  const activateAuth = (data) => {
    setIsAuth(data)
    setLocalStorage(data)
  }

  const client = useApolloClient()

  const removeAuth = () => {
    setIsAuth(false)
    window.sessionStorage.removeItem('token')
    client.resetStore()
  }

  return (
    <Context.Provider value={{ isAuth, activateAuth, removeAuth }}>
      {children}
    </Context.Provider>
  )
}
