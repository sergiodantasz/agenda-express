import path from "node:path"
import express from "express"

import homeRouter from "./routes/home.routes.js"
import userRouter from "./routes/user.routes.js"

import "dotenv/config"

const app = express()
const port = process.env.PORT

app.use(express.static(path.join(import.meta.dirname, "public")))

app.set("views", path.join(import.meta.dirname, "views"))
app.set("view engine", "ejs")

app.use(homeRouter)
app.use(userRouter)

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
