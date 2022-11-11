import React, { createContext, useState } from 'react'
import { useSesionStorage } from '../hooks/useSesionStorage'

export const Context = createContext()

export function ContextProvider ({ children }) {
  const [storedValue, setLocalStorage] = useSesionStorage('token', '')
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
