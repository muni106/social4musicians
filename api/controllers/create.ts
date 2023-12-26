import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { userCreation } from "../queries/dbCreate";

const prisma: PrismaClient = new PrismaClient();

const postUser = async (req: Request, res: Response) => {
    const { nickName, firstName, lastName, e_mail, password, locality, bestInstrument, telephoneNumber, isCertified, isMaster } = req.body
    await userCreation(prisma, nickName, firstName, lastName, e_mail, password, locality, bestInstrument, telephoneNumber, isCertified, isMaster);
    prisma.$disconnect();
};

const postChat = async (req: Request, res: Response) => {
    const { chatName } = req.body;
    
};
