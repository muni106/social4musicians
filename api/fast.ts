import { PrismaClient } from "@prisma/client";
import { seedMessages } from "./seed/seedChats";
import { seedAlbums, seedSongs } from "./seed/seedBand";
const prisma = new PrismaClient();

seedAlbums(prisma);
