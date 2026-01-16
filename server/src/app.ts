import express from "express";
import type { Request, Response } from "express";
import cors from "cors";
import { notFound, errorHandler } from "../middleware/errorHandler";

const app = express();

app.use(cors());

app.get("/greetings", (_req: Request, res: Response) => {
  res.send("Hello");
});

app.use(notFound);
app.use(errorHandler);

export default app;
