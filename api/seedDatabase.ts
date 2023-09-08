import { PrismaClient } from '@prisma/client';
import { seedGenre, seedFollowedGenres, seedInfluencingGenres } from './seed/seedGenre'
import { seedMusicians } from './seed/seedMusician';
import { seedHashtags } from './seed/seedHashtag';
import { getAllArtists } from './queries/dbRead';

const prisma = new PrismaClient();

async function seedUsersGenres() {
    await seedMusicians(prisma)
        .catch(e => {
            console.log(e.message);
        })

    await seedGenre(prisma)
        .catch(e => {
            console.log(e.message);
        })

}


seedUsersGenres().then(() => {
    seedFollowedGenres(prisma)
        .catch(e => {
            console.log(e.message);
        })

    seedInfluencingGenres(prisma)
        .catch(e => {
            console.log(e.message);
        })
    
    getAllArtists(prisma);

});

seedHashtags(prisma)
    .catch(e => {
        console.log(e.message);
    })
prisma.$disconnect();


