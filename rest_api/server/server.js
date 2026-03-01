import express from "express"
import cors from "cors"
import dontenv from "dotenv"
import route from "./routes/hashRoute.js"
import connectDB from "./config/db.js"


dontenv.config()

const app = express()
 
connectDB()

app.use(cors())

app.use(express.json())

app.use("/api/hash",route)

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{

    console.log(`server running succesfully...http://localhost:${PORT}`)
    
})