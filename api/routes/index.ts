import { Router } from "express";
import { userCreation } from "../queries/dbCreate";
import bodyParser from "body-parser";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const router = Router();
router.use(bodyParser.json());

router.get('/hello', (req, res) => {
    console.log("hello");
    res.json("fuck you");
})

router.post("/createUser", (req, res) => {
  const {
    email,
    nickname,
    firstname,
    lastname,
    locality,
    bestInstrument,
    tel,
    password,
  } = req.body;

  const newUser = {
    email,
    nickname,
    firstname,
    locality,
    bestInstrument,
    tel,
    password,
  };

  userCreation(
    prisma,
    nickname,
    firstname,
    lastname,
    email,
    password,
    locality,
    bestInstrument,
    tel,
    false,
    false
  );
  res.json(newUser);
});

