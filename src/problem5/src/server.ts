import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import indexRoute from "./routes/index.route";
import APIError from "./utils/api-error";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/api", indexRoute);

app.use(
  (err: APIError | Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof APIError) {
      res.status(err.statusCode).send({ message: err.message });
      return;
    }
    res.status(500).send({ message: err.message || "Something went wrong!" });
  }
);

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
