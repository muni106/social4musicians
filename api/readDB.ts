import { PrismaClient } from '@prisma/client';
import { getAllArtists } from './queries/dbRead';



const prisma = new PrismaClient();
async function getthem() {
    const allArtists = await getAllArtists(prisma);
    console.log(allArtists.length);
}

getthem();