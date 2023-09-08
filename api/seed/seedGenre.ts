import { PrismaClient } from '@prisma/client';
import { createGenre, createInfluenceGenre, followGenre } from '../queries/dbCreate';

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

export async function seedFollowedGenres(prisma: PrismaClient) {
  await followGenre(prisma, 'trumpetplayer2', 'Rock');
  await followGenre(prisma, 'trumpetplayer2', 'Pop');
  await followGenre(prisma, 'pianist1', 'Pop');
  await followGenre(prisma, 'pianist1', 'Hip-Hop');
  await followGenre(prisma, 'keyboardist2', 'Hip-Hop');
  await followGenre(prisma, 'keyboardist2', 'Country');
  await followGenre(prisma, 'keyboardist2', 'Jazz');
  await followGenre(prisma, 'saxophonist1', 'Country');
  await followGenre(prisma, 'violinist1', 'Jazz');
  await followGenre(prisma, 'singer1', 'Electronic');
  await followGenre(prisma, 'bassist1', 'Classical');
  await followGenre(prisma, 'keyboardist1', 'R&B');
  await followGenre(prisma, 'trumpetplayer1', 'Reggae');
  await followGenre(prisma, 'flutist1', 'Metal'); 
  await followGenre(prisma, 'flutist2', 'Rock');
  await followGenre(prisma, 'pianist2', 'Pop');
  await followGenre(prisma, 'drummer2', 'Hip-Hop');
  await followGenre(prisma, 'saxophonist2', 'Country');
  await followGenre(prisma, 'violinist2', 'Jazz');
  await followGenre(prisma, 'singer2', 'Electronic');
  await followGenre(prisma, 'bassist2', 'Classical');
  await followGenre(prisma, 'keyboardist2', 'R&B');
  await followGenre(prisma, 'trumpetplayer2', 'Reggae');
  await followGenre(prisma, 'flutist2', 'Metal');
  await followGenre(prisma, 'percussionist1', 'Rock');
  await followGenre(prisma, 'violist1', 'Pop');
  await followGenre(prisma, 'cellist1', 'Hip-Hop');
  await followGenre(prisma, 'clarinetist1', 'Country');
  await followGenre(prisma, 'sitarplayer1', 'Jazz');

}

export async function seedInfluencingGenres(prisma: PrismaClient) {
  await createInfluenceGenre(prisma, 'trumpetplayer2', 'Rock');
  await createInfluenceGenre(prisma, 'trumpetplayer2', 'Pop');
  await createInfluenceGenre(prisma, 'pianist1', 'Pop');
  await createInfluenceGenre(prisma, 'pianist1', 'Hip-Hop');
  await createInfluenceGenre(prisma, 'keyboardist2', 'Hip-Hop');
  await createInfluenceGenre(prisma, 'keyboardist2', 'Country');
  await createInfluenceGenre(prisma, 'keyboardist2', 'Jazz');
  await createInfluenceGenre(prisma, 'saxophonist1', 'Country');
  await createInfluenceGenre(prisma, 'violinist1', 'Jazz');
  await createInfluenceGenre(prisma, 'singer1', 'Electronic');
  await createInfluenceGenre(prisma, 'bassist1', 'Classical');
  await createInfluenceGenre(prisma, 'keyboardist1', 'R&B');
  await createInfluenceGenre(prisma, 'trumpetplayer1', 'Reggae');
  await createInfluenceGenre(prisma, 'flutist1', 'Metal'); 
  await createInfluenceGenre(prisma, 'flutist2', 'Rock');
  await createInfluenceGenre(prisma, 'pianist2', 'Pop');
  await createInfluenceGenre(prisma, 'drummer2', 'Hip-Hop');
  await createInfluenceGenre(prisma, 'saxophonist2', 'Country');
  await createInfluenceGenre(prisma, 'violinist2', 'Jazz');
  await createInfluenceGenre(prisma, 'singer2', 'Electronic');
  await createInfluenceGenre(prisma, 'bassist2', 'Classical');
  await createInfluenceGenre(prisma, 'keyboardist2', 'R&B');
  await createInfluenceGenre(prisma, 'trumpetplayer2', 'Reggae');
  await createInfluenceGenre(prisma, 'flutist2', 'Metal');
  await createInfluenceGenre(prisma, 'percussionist1', 'Rock');
  await createInfluenceGenre(prisma, 'violist1', 'Pop');
  await createInfluenceGenre(prisma, 'cellist1', 'Hip-Hop');
  await createInfluenceGenre(prisma, 'clarinetist1', 'Country');
  await createInfluenceGenre(prisma, 'sitarplayer1', 'Jazz');
  
}
