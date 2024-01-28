import React, { useContext } from "react"
import { NumberContext } from "./NumContext"

function Main2() {
  const num = useContext(NumberContext)
  const handleClick = () => {
    num.contextHandler(num.value)
  }
  return (
    <div>
      <br />
      <button onClick={handleClick}>click here</button>
    </div>
  )
}

export default Main2
