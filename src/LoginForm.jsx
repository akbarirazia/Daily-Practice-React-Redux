import React, { useState } from "react"

function LoginForm() {
  const [data, setData] = useState({
    user: "",
    password: "",
  })
  function handleChange(e) {
    const { name, value } = e.target
    setData((prev) => ({ ...prev, [name]: value }))
  }
  function handleSubmit(e) {
    e.preventDefault()
    if (data.user.trim() == "" || data.password.trim() == "") {
      console.log("please enter all data")
    } else {
      alert(`${data.user} password : ${data.password}`)
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <label> username</label>
      <input type="text" name="user" onChange={handleChange} />
      <label>password</label>
      <input type="password" name="password" id="" onChange={handleChange} />
      <button type="submit">submit</button>
    </form>
  )
}

export default LoginForm
