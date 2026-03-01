import React, { useState } from 'react'
import axios from "axios"

const App = () => {

  const [formdata, setFormdata] = useState({ name: "", email: "", password: "" })



  const handleChange = (e) => {

    setFormdata({ ...formdata, [e.target.name]: e.target.value })


  }


  const handleSubmit = async (e) => {

    try {

      e.preventDefault()

      const res = await axios.post("http://localhost:5000/api/hash/login", formdata)

      console.log(res);
      console.log(res.data)
      console.log(res.data.token)

      setFormdata({name: "", email: "", password: ""})

    } catch (error) {
      console.log(error.response.data.msg);
    }


  }


  return (
    <>
      <form onSubmit={handleSubmit}>

        <input type="name" placeholder='enter the name' name='name' value={formdata.name} onChange={handleChange} />

        <input type="email" placeholder='enter the email' name='email' value={formdata.email} onChange={handleChange} />

        <input type="password" placeholder='enter the password' name='password' value={formdata.password} onChange={handleChange} />

        <input type="submit" value={"Login"} />

      </form>
    </>
  )
}

export default App