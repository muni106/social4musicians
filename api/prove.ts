
import { PrismaClient } from '@prisma/client';
import { getMusicianAccount, getMusicianProfile, updateEmail } from './queries/userQueries';

const prisma: PrismaClient = new PrismaClient();

async function logMusicianAccount() {
    const Musician = await getMusicianAccount(prisma, 'bello');
    console.log(Musician);
}
logMusicianAccount();

async function logMusicianProfile() {
    const profile = await getMusicianProfile(prisma, 'bello');
    console.log(profile);
}
logMusicianProfile();

async function new_email() {
    await updateEmail(prisma, 'bello', 'molt.206@gmail.com');
}
new_email();
logMusicianProfile();
prisma.$disconnect();