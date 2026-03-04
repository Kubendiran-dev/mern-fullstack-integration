import React from 'react'
import { useState } from 'react'
import axios from "axios"

const App = () => {

  const [savedata, setSavedata] = useState({ name: "", email: "", password: "" })

  const handleChange = (e) => {

    setSavedata({ ...savedata, [e.target.name]: e.target.value })

  }


  const handleSubmit = async (e) => {

    try {

      e.preventDefault()

      const datasave = await axios.post("http://localhost:5000/api/middleware/create", savedata)

      alert(datasave.data.msg);



    } catch (error) {

      alert(error.response.data.msg);


    }

  }

  return (
    <>

      <div>Register
      </div>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter the name' name="name" onChange={handleChange} />
        <input type="email" placeholder='Enter the email' name="email" onChange={handleChange} />
        <input type="password" placeholder='Enter the password' name="password" onChange={handleChange} />
        <input type="submit" value={"Register"} />
      </form>

    </>
  )
}

export default App