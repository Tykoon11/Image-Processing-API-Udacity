import app from "../index";
import supertest from "supertest";
// import routes from "../routes";

const request = supertest(app);

describe("Test endpoint response", () => {
  it("gets the api endpoints", async () => {
    const response = await request.get("/api/images");
    expect(response.status).toBe(200);
  });
});
