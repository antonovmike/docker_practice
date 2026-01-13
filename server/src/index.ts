import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/greetings", (_req: Request, res: Response) => {
  res.send("Hello");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
// npm run dev
// http://localhost:3000/greetings
// docker build -t hello-server:latest .
// docker run --rm -p 3000:3000 hello-server:latest
// Test: curl http://localhost:3000/greetings -> "Hello"
