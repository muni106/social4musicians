import { PrismaClient } from '@prisma/client';
import { seedGenre } from './seedGenre'
const prisma = new PrismaClient();

seedGenre(prisma)
    .catch(e => {
        console.log(e.message);
    })
prisma.$disconnect();


