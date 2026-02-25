import express from "express"
import { responseController } from "../Controllers/responseController.js"

const route = express.Router()

route.post("/create",responseController)
// route.post("/jsondata/:userid", resJson)


export default route

//http://localhost:5000/api/res/create

//http://localhost:5000/api/res/jsondata/1