import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { createInfluenceGenre, followGenre } from "../queries/dbCreate";

const prisma: PrismaClient = new PrismaClient();


const genreFollow = async (req: Request, res: Response) => {
    const {nickName, genreName} = req.params;
    const result = await followGenre(prisma, nickName, genreName);
    res.json(result);
    prisma.$disconnect();
};

const genreInfluence = async (req:Request, res: Response) => {
    const {nickName, genreName} = req.params;
    const result = await createInfluenceGenre(prisma, nickName, genreName);
    prisma.$disconnect();
};

