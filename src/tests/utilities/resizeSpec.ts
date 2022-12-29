import resize from "../../utilities/resize"
import path from "path"
import { promises as fs } from "fs"

describe("Test resize function", () => {
  it("checks for successful resizing", async () => {
    const filename = "fjord"
    const width = 600
    const height = 500
    const outputImage = path.resolve(
      __dirname,
      `../../../assets/cropped/${filename}x${width}x${height}.jpg`
    )
    const resizeFunction = await resize(filename, width, height)
    expect(resizeFunction).toBe(outputImage)
  })
})

afterAll(async () => {
  const filename = "fjord"
  const width = 600
  const height = 500
  const outputImage = path.resolve(
    __dirname,
    `../../../assets/cropped/${filename}x${width}x${height}.jpg`
  )
  await fs.unlink(outputImage)
})
