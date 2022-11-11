import React, { createContext, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

export const Context = createContext()

export function ContextProvider ({ children }) {
  const [storedValue, setLocalStorage] = useLocalStorage('token', '')
  const [isAuth, setIsAuth] = useState(storedValue || null)
  const activateAuth = (data) => {
    setIsAuth(data)
    setLocalStorage(data)
  }
  return (
    <Context.Provider value={{ isAuth, activateAuth }}>
      {children}
    </Context.Provider>
  )
}
