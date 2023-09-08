import { PrismaClient } from '@prisma/client';
import { createHashTag } from '../queries/dbCreate';


export async function seedHashtags(prisma: PrismaClient) {
    await createHashTag(prisma, '#Music');
    await createHashTag(prisma, '#RockMusic');
    await createHashTag(prisma, '#PopSongs');
    await createHashTag(prisma, '#HipHopBeats');
    await createHashTag(prisma, '#CountryClassics');
    await createHashTag(prisma, '#JazzLovers');
    await createHashTag(prisma, '#ElectronicDance');
    await createHashTag(prisma, '#ClassicalMelodies');
    await createHashTag(prisma, '#RnBRhythms');
    await createHashTag(prisma, '#ReggaeVibes');
    await createHashTag(prisma, '#MetalMania');
    await createHashTag(prisma, '#BluesGuitar');
    await createHashTag(prisma, '#FunkyGrooves');
    await createHashTag(prisma, '#IndieMusic');
    await createHashTag(prisma, '#AlternativeRock');
    await createHashTag(prisma, '#SoulfulSounds');
    await createHashTag(prisma, '#AcousticTunes');
    await createHashTag(prisma, '#EDMParty');
    await createHashTag(prisma, '#AudioAssassins');
    await createHashTag(prisma, '#BeatsAndChaos');
    await createHashTag(prisma, '#BassDropBrigade');
    await createHashTag(prisma, '#RiffsAndRebellion');
    await createHashTag(prisma, '#LoudAndProud');
}