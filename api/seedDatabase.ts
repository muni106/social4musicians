import { PrismaClient } from '@prisma/client';
import { seedGenre } from './seed/seedGenre'
import { seedMusicians } from './seed/seedMusician';
import { seedHashtags } from './seed/seedHashtag';

const prisma = new PrismaClient();

seedMusicians(prisma)
    .catch(e => {
        console.log(e.message);
    })
seedGenre(prisma)
    .catch(e => {
        console.log(e.message);
    })

seedHashtags(prisma)
    .catch(e => {
        console.log(e.message);
    })
prisma.$disconnect();


