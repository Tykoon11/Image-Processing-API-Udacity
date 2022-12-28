import sharp from "sharp"
import path from "path"
import fs from "fs"

//A Function to resize Images
const resize = async (filename: string, width: number, height: number) => {
  try {
    const inputImage = path.resolve(
      __dirname,
      `../assets/images/${filename}.jpg`
    )
    const outputImage = path.resolve(
      __dirname,
      `../assets/cropped/${filename}x${width}x${height}.jpg`
    )

    //Cache block (conditional statement) for better performance and optimization
    if (await fs.existsSync(outputImage)) {
      console.log("exists")
      return outputImage
    } else {
      console.log("creating...")
      await sharp(inputImage)
        .resize({ height: height, width: width })
        .toFormat("jpeg")
        .toFile(outputImage)

      return outputImage
    }
  } catch {
    ;("error creating path")
    console.log("error creating path")
  }
}

export default resize
