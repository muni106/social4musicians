import { PrismaClient } from '@prisma/client';
import { seedGenre } from './seedGenre'
import { seedMusicians } from './seedMusician';
import { getMusicianAccount } from '../queries/userQueries';


const prisma = new PrismaClient();

seedMusicians(prisma)
    .catch(e => {
        console.log(e.message);
    })
seedGenre(prisma)
    .catch(e => {
        console.log(e.message);
    })

prisma.$disconnect();


