import { PrismaClient } from "@prisma/client";
import {
  seedGenre,
  seedFollowedGenres,
  seedInfluencingGenres,
} from "./seed/seedGenre";
import { seedMusicians } from "./seed/seedMusician";
import {
  seedComments,
  seedDiscussions,
  seedHashtagFollows,
  seedHashtags,
  seedPostReferences,
  seedReactions,
} from "./seed/seedPosts";
import {
  seedBandMembers,
  seedAlbums,
  seedBands,
  seedSongGenres,
  seedSongs,
} from "./seed/seedBand";
import { getAllArtists } from "./queries/dbRead";
import { seedChatParticipant, seedChats, seedMessages } from "./seed/seedChats";

const prisma = new PrismaClient();

async function seedUsersGenres() {
  await seedMusicians(prisma);
  await seedGenre(prisma);
  await seedHashtags(prisma), seedChats(prisma);
  await seedBands(prisma);
}

async function secondWaveSeed() {
  await seedChatParticipant(prisma);
  await seedDiscussions(prisma);
  await seedFollowedGenres(prisma);
  await seedInfluencingGenres(prisma);
}

async function thirdWave() {
  await seedComments(prisma);
  await seedReactions(prisma);
  await seedPostReferences(prisma);
  await seedHashtagFollows(prisma);
  await seedMessages(prisma);
  await seedSongs(prisma);
  await seedSongGenres(prisma);
  console.log("finito3");
  await seedBandMembers(prisma);
}

async function diobestia() {
  try {
    await seedUsersGenres();
    await secondWaveSeed();
    await thirdWave();
    console.log("vediamo");
  } catch (err) {
    console.error(err);
  }
}

diobestia();

prisma.$disconnect();
