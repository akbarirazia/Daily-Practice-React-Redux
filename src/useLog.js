import { useEffect } from "react"

export default function useLog(param) {
  return (
    useEffect(() => {
      console.log(param)
    }),
    [param]
  )
}
