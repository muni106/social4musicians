import { PrismaClient } from '@prisma/client';
import { createGenre } from '../queries/dbCreate';

export async function seedGenre(prisma: PrismaClient) {
    await createGenre(
        prisma,
        'Rock',
        'United States',
        'A genre of popular music that originated in the United States in the late 1940s and 1950s.'
      );
    
      await createGenre(
        prisma,
        'Pop',
        'United States',
        'A genre of popular music that originated in its modern form during the mid-1950s in the United States.'
      );
    
      await createGenre(
        prisma,
        'Hip-Hop',
        'United States',
        'A genre of music that developed in the United States by inner-city African Americans and Latino Americans.'
      );
    
      await createGenre(
        prisma,
        'Country',
        'United States',
        'A genre of popular music that originated in the Southern United States in the early 1920s.'
      );
    
      await createGenre(
        prisma,
        'Jazz',
        'United States',
        'A genre of music that originated in the African-American communities of New Orleans in the late 19th and early 20th centuries.'
      );
    
      await createGenre(
        prisma,
        'Electronic',
        'Global',
        'A genre of music that primarily involves electronic devices and technology.'
      );
    
      await createGenre(
        prisma,
        'Classical',
        'Europe',
        'A genre of music characterized by its complexity and rich instrumentation, often associated with orchestras.'
      );
    
      await createGenre(
        prisma,
        'Reggae',
        'Jamaica',
        'A genre of music that originated in Jamaica in the late 1960s.'
      );
    
      await createGenre(
        prisma,
        'Metal',
        'Global',
        'A genre of music characterized by its heavy and aggressive sound.'
      );

      await createGenre(
        prisma,
        'Blues',
        'United States',
        'A genre of music that originated in African American communities in the Deep South of the United States.'
      );
    
      await createGenre(
        prisma,
        'Funk',
        'United States',
        'A genre of music that originated in African American communities in the 1960s.'
      ); 
  }
