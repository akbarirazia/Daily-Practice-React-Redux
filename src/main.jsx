import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import NumContext from "./NumContext.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NumContext>
      <App />
    </NumContext>
  </React.StrictMode>
)
