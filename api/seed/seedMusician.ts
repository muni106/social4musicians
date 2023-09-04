
import { PrismaClient } from '@prisma/client';
import { userCreation } from '../queries/userQueries';
export async function seedMusicians(prisma: PrismaClient) {
        userCreation(prisma,'bello', 'chiello', 'Rock', 'sam.rock2@example.com', 'Nashville', 'Guitar', '553-1111', true, true );
    }
