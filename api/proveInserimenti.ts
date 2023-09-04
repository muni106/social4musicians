
import { PrismaClient } from '@prisma/client';
import { getMusicianAccount } from './queries/userQueries';
import { userCreation } from './queries/userQueries';

const prisma: PrismaClient = new PrismaClient();

userCreation(prisma,'bello', 'chiello', 'Rock', 'sam.k2@example.com', 'Nashville', 'Guitar', '553-1', true, true );
prisma.$disconnect();