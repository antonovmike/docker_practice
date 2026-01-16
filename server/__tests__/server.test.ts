import request from "supertest";
import app from "../src/app";

describe("Backend API", () => {
  test("GET /greetings → Hello", async () => {
    const res = await request(app).get("/greetings");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello");
  });
});

test("GET /unknown -> 404 Not Found", async () => {
  const res = await request(app).get("/unknown");
  expect(res.statusCode).toBe(404);
  expect(res.body).toHaveProperty("error", "Not found");
});
