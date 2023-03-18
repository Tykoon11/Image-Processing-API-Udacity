import express from "express"
import resize from "../utilities/resize"
import multer from "multer"
import path from "path"

//Routing with request queries
const routes = express.Router()
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(__dirname, `../../assets/images`))
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
})
const upload = multer({ storage: storage })

//localhost:3001/api/images?filename=icelandwaterfall&width=600&height=600

routes.post(
  "/",
  upload.single("photo"),
  async (req: express.Request, res: express.Response): Promise<void> => {
    try {
      console.log(req.file)

      const filename = req.file?.originalname
      console.log(`${filename} na em`)
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
