import request from "supertest";
import app from "../src/index";

describe("Backend API", () => {
  test("GET /greetings → Hello", async () => {
    const res = await request(app).get("/greetings");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello");
  });
});
