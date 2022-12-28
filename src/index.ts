// Creating a Server
import express from "express"
import routes from "./routes/index"
const app = express()
const port = 3001

// Routing the server to the route endpoint
app.use("/api/images", routes)

app.listen(port, () => {
  console.log("listening on port")
})

export default app
