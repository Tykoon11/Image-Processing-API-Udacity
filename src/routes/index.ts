import express, { Request } from "express";
import resize from "../utilities/resize";

//Routing with request queries
const routes = express.Router();

//localhost:3000/api/images?filename=icelandwaterfall&width=600&height=600

routes.get(
  "/",
  async (req: express.Request, res: express.Response): Promise<void> => {
    try {
      console.log(req.query);
      const filename = req.query.filename;
      const width = Number(req.query.width);
      const height = Number(req.query.height);

      const photo = await resize(filename, width, height);
      res.sendFile(photo as string);
    } catch {}
  }
);

export default routes;
