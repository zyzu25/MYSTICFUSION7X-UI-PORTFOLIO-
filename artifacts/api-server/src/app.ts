import express, { Request, Response, NextFunction } from "express";
import pinoHttp from "pino-http";

const app = express();

// logger middleware
app.use(pinoHttp());

// example route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

// example middleware (if you need next)
app.use((req: Request, res: Response, next: NextFunction) => {
  next();
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
