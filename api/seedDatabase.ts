import { PrismaClient } from '@prisma/client';
import { seedGenre, seedFollowedGenres, seedInfluencingGenres } from './seed/seedGenre'
import { seedMusicians } from './seed/seedMusician';
import { seedComments, seedDiscussions, seedHashtagFollows, seedHashtags, seedPostReferences, seedReactions } from './seed/seedPosts';
import { getAllArtists } from './queries/dbRead';
import { seedChatParticipant, seedChats, seedMessages } from './seed/seedChats';

const prisma = new PrismaClient();

async function seedUsersGenres() {
    await seedMusicians(prisma);
    await seedGenre(prisma);
    await seedHashtags(prisma),
    await seedChats(prisma);
    
}

async function secondWaveSeed() {
    await seedChatParticipant(prisma);
    await seedDiscussions(prisma);
}

seedUsersGenres()
.then(() => 
    secondWaveSeed()
).then(() => {
    seedFollowedGenres(prisma);
    seedInfluencingGenres(prisma);
    seedMessages(prisma);
    seedComments(prisma);
    seedReactions(prisma);
    seedPostReferences(prisma);
    seedHashtagFollows(prisma)
});




prisma.$disconnect();


