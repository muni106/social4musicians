import express, { Express, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import cookieParser from "cookie-parser";
import cors from "cors";
import { router } from "./routes";
import { userCreation } from "./queries/dbCreate";
import type { artist } from "@prisma/client";
import { getAllArtists, getAllNicknames, getMusicianAccount, getMusicianByEmail } from "./queries/dbRead";
import { stringify } from "querystring";

const prisma = new PrismaClient();
const app: Express = express();

app.use(cors());

app.use(express.json());

app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 4000;

app.post("/try", async (req: Request, res: Response) => {
  const result: artist = req.body;
  try {
    userCreation(
      prisma,
      result.nickname,
      result.firstname,
      result.lastname,
      result.e_mail,
      result.pass,
      result.locality,
      result.bestinstrument,
      result.telephonenumber,
      false,
      false
    );
  } catch (error) {
    console.error("error in user creation" + error)
  }
  console.log(result);
});


app.get('/nicknames', (req:Request, res:Response) => {
  let nicknames:Promise<string[]> = getAllNicknames(prisma);
  let val:string[] = [];
  nicknames
    .then(x => x.forEach(el => {
      val.push(el);
    }))
    .then(() => {
      return res.json(val);
    })
})

app.use("/api", router);
app.listen(4000, () =>
  console.log("🚀 Server ready at: http://localhost:4000")
);
