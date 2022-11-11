import { useState } from 'react'

export function useSesionStorage (key, initialValue) {
  const [storedValue, setValue] = useState(() => {
    try {
      const item = window.sessionStorage.getItem(key)
      return item !== null ? JSON.parse(item) : initialValue
    } catch (e) {
      return initialValue
    }
  })
  const setLocalStorage = (value) => {
    try {
      window.sessionStorage.setItem(key, JSON.stringify(value))
      setValue(value)
    } catch (e) {
      console.log(e)
    }
  }
  return [storedValue, setLocalStorage]
}
