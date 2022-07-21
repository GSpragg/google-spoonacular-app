import { useEffect, useState } from "react"

export function useLocalStorage() {
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem()
    if (jsonValue != null) return JSON.parse(jsonValue)

 
  })

  useEffect(() => {
    localStorage.setItem( JSON.stringify(value))
  }, [value])

  return [value, setValue]
}