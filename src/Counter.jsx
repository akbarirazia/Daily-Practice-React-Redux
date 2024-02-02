import React from "react"
import { useState } from "react"

function Counter() {
  const [counter, setCounterValue] = useState(0)
  const increaseValue = () => {
    setCounterValue((prev) => prev + 1)
  }
  return (
    <div>
      Counter
      <br />
      {counter}
      <button onClick={increaseValue}>increase</button>
    </div>
  )
}

export default Counter
