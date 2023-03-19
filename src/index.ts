// Creating a Server
import express from "express"
import routes from "./routes/index"

const app: express.Application = express()
const port = 3004

// Visit http://localhost:3004/form

app.use("/", express.static("assets"))

app.use(express.json()) // for post
app.use(express.urlencoded()) // for post

// Routing the server to the route endpoint
app.use("/api/images", routes)

app.listen(port, () => {
  console.log(`listening on ${port}`)
})

export default app
