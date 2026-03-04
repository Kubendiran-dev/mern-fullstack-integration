import express from "express"
import { createData } from "../controller/middlewareController.js"
import { ValidateRegister } from "../middlewares/ValidateUser.js"


const route = express.Router()

route.post("/create",ValidateRegister,createData)

export default route


//http://localhost:5000/api/middleware/create