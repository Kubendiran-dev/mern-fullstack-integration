import express from "express"
import { add, login } from "../controller/hashController.js"



const route = express.Router()


route.post("/pwHash",add)

route.post('/login',login)


export default route


// http://localhost:5000/api/hash/pwHash

// http://localhost:5000/api/hash/login