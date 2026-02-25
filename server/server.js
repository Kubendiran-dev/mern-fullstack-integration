import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import route from "./routeRoutings/route.js"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/res", route)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`server completed successfully http://localhost:${PORT}`)
})

//http://localhost:5000/api/res/create