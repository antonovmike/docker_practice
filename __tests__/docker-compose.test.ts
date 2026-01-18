import { execSync } from "child_process";
import { beforeAll, afterAll, test, expect } from "vitest";
import fetch from "node-fetch";

beforeAll(() => {
  // Build and run containers in the background
  execSync("docker compose up -d --build", { stdio: "inherit" });
}, 60000);

afterAll(() => {
  // Stop containers after testing
  execSync("docker compose down", { stdio: "inherit" });
}, 60000);

test("server responds with Hello", async () => {
  // Make several attempts until the server starts up.
  let responseText = "";
  for (let i = 0; i < 5; i++) {
    try {
      const res = await fetch("http://localhost:3000/greetings");
      responseText = await res.text();
      break;
    } catch {
      await new Promise((r) => setTimeout(r, 2000));
    }
  }
  expect(responseText).toBe("Hello");
});

test("client serves static HTML", async () => {
  let html = "";
  for (let i = 0; i < 5; i++) {
    try {
      const res = await fetch("http://localhost:8080");
      html = await res.text();
      break;
    } catch {
      await new Promise((r) => setTimeout(r, 2000));
    }
  }
  expect(html).toMatch(/<!DOCTYPE html>/i);
});
