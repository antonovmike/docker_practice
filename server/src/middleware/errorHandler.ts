import type { Request, Response, NextFunction } from "express";
// Middleware: 404 handler
function notFound(_req: Request, res: Response) {
  res.status(404).json({ error: "Not found" });
}
// Middleware: Error handler
function errorHandler(err: Error, _req: Request, res: Response) {
  console.error("Error:", err.message);
  res.status(500).json({ error: "Internal server error" });
}

export { notFound, errorHandler };
