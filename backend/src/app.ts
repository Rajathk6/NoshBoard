// backend/src/app.ts

import express from "express";
import cors from "cors";
import dishRouter from "./routes/dish.routes";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", dishRouter);

export default app;
