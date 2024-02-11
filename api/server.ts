import express, { Express, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import cookieParser from "cookie-parser";
import cors from "cors";
import { router } from "./routes";

const prisma = new PrismaClient();
const app: Express = express();

app.use(
  cors({
    credentials: true,
    origin: true,
  })
);

app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 4000;

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
