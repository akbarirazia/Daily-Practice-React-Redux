// Hi Razia,
// If you are reading this from the future, today was an incredible day. God had me blessed and my exam went well. Don't fall off the track future Razia.

import { useContext, useEffect, useReducer, useRef, useState } from "react"
import { NumberContext } from "./NumContext"
import "./index.css"
import Main2 from "./Main2"
import useAddStorage from "./useAddStorage"
import useLog from "./useLog"
import LoginForm from "./LoginForm"
import Counter from "./Counter"
export function counterReducer(state, action) {
  if (action.type == "increment") {
    return { count: state.count + 1 }
  }
  if (action.type == "decrement") {
    return { count: state.count - 1 }
  } else if (action.type == "reset") {
    return { count: (state.count = 0) }
  }
}

function App() {
  // const num = useContext(NumberContext)
  // console.log(num)
  const input = useRef(null)

  // const [value, setValue] = useAddStorage("name", "razia")
  // useLog(value)
  // const [initialValue, setValue] = useState(10)
  // const [remainingTime, setRemainingTime] = useState(10)
  // function reduce(param) {
  //   if (param === 0) return setValue(0)
  //   return setValue(param - 1)
  // }
  // function clearTime(id) {
  //   clearInterval(id)
  //   // setRemainingTime(remainingTime)
  //   // setValue(initialValue)
  // }
  // const timeoutID = setInterval(() => {
  //   reduce(initialValue)
  //   // setRemainingTime((prevTime) => prevTime - 1)
  //   return initialValue
  // }, 1000)
  const [state, dispatch] = useReducer(counterReducer, { count: 0 })

  return (
    // //   <div id="app">
    // //     {num.value}
    // //     <Main2 />
    // <>
    //   <h1>The (Final?) Counter</h1>
    //   <p id="actions">
    //     <button
    //       onClick={() => {
    //         dispatch({ type: "increment" })
    //       }}
    //     >
    //       Increment
    //     </button>
    //     <button
    //       onClick={() => {
    //         dispatch({ type: "decrement" })
    //       }}
    //     >
    //       Decrement
    //     </button>
    //     <button
    //       onClick={() => {
    //         dispatch({ type: "reset" })
    //       }}
    //     >
    //       Reset
    //     </button>
    //   </p>
    //   <p id="counter">{state.count}</p>
    // </>

    // //   </div>
    // // <>
    // /* <input type="text" ref={input} />
    //   <button type="button" onClick={() => clearTime(timeoutID)}>
    //     Add to Local Storage
    //   </button>
    //   {initialValue} */
    // // </>
    // <LoginForm />
    <Counter />
  )
}

export default App
