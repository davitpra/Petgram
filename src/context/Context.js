import React, { createContext, useState } from 'react'

export const Context = createContext()

export function ContextProvider ({ children }) {
  const [isAuth, setIsAuth] = useState(false)
  const activateAuth = () => setIsAuth(true)
  return (
    <Context.Provider value={{ isAuth, activateAuth }}>
      {children}
    </Context.Provider>
  )
}
