import React, { useState, useEffect } from 'react'
import axios from "axios";

const App = () => {

  const departmentSchema = {
    district_name: "",
    departments_name: "",
    subcatagory: "",
    members_count: "",
    department_code: "",
  }

  const [data, setData] = useState(departmentSchema)

  
  const [msg, setMsg] = useState([])

  useEffect(() => {
    setData({
      district_name: "Tiruppur",
      departments_name: "Finance Department",
      subcatagory: "Finance Administration",
      members_count: 88,
      department_code: 641602
    });
  }, []);

  const handleClick = async () => {
    try {

      

      const fetchdata = await axios.post(
        "http://localhost:5000/api/department/add",
        data
      );

      console.log(fetchdata);

      
      setMsg([fetchdata.data]) 

    } catch (error) {
      console.log("error occurred", error);
    }
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Form Handling</h1>

   
      {
        msg.map((e, index) => (
          <div key={index}>
            <h3>{e.msg}</h3>
          </div>
        ))
      }

      <button onClick={handleClick}>Click to check</button>
    </>
  )
}

export default App