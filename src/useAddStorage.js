import { useEffect, useState } from "react"

function getsavedItem(name, initialValue) {
  const item = JSON.parse(localStorage.getItem(name))
  if (item) return item
  if (initialValue instanceof Function) return initialValue()
  return initialValue
}

function useAddStorage(name, initialValue) {
  const [value, setValue] = useState(() => {
    return getsavedItem(name, initialValue)
  })

  useEffect(() => {
    localStorage.setItem(name, JSON.stringify(value))
  }, [name, value])

  return [value, setValue]
}

export default useAddStorage
