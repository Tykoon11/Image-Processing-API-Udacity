import express from "express"
import resize from "../utilities/resize"

//Routing with request queries
const routes = express.Router()

//localhost:3001/api/images?filename=icelandwaterfall&width=600&height=600

routes.post(
  "/",
  async (req: express.Request, res: express.Response): Promise<void> => {
    try {
      console.log(req.body)

      const filename = req.body.filename
      const width = Number(req.body.width)
      const height = Number(req.body.height)

      const photo = await resize(filename as string, width, height)
      console.log("Rendering file")
      res.sendFile(photo as string)
    } catch {
      console.log(
        "Unable to Resize - Please check URL filename, height and width values!!"
      )
      res.send(
        "Unable to Resize - Please check URL filename, height and width values!!"
      )
    }
  }
)

export default routes
