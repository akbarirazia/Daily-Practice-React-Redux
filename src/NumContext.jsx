import React, { useContext, useState } from "react"
export const NumberContext = React.createContext({
  value: 0,
  contextHandler: () => {},
})
function NumContext({ children }) {
  const [number, setNumber] = useState(0)
  function contextHandler(data) {
    setNumber(data + 1)
  }

  return (
    <NumberContext.Provider value={{ value: number, contextHandler }}>
      {children}
    </NumberContext.Provider>
  )
}

export default NumContext
