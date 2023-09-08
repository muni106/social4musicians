import { PrismaClient } from '@prisma/client';
import { createDiscussion, createComment, createReaction } from '../queries/dbCreate';

export async function seedDiscussions(prisma: PrismaClient) {
    await createDiscussion(prisma, new Date(), 'Rock vs. Pop', 3.8, 'guitarist1', 'Debating the merits of rock and pop music.');
    await createDiscussion(prisma, new Date(), 'Classical Composers', 4.7, 'drummer1', 'Discussing the greatest classical composers.');
    await createDiscussion(prisma, new Date(), 'Electronic Music Festivals', 4.1, 'saxophonist1', 'Sharing experiences from electronic music festivals.');
    await createDiscussion(prisma, new Date(), 'Hip-Hop Lyrics Analysis', 4.6, 'violist1', 'Analyzing the lyrics of popular hip-hop songs.');
    await createDiscussion(prisma, new Date(), 'Country Music Legends', 4.5, 'cellist1', 'Celebrating iconic country music artists.');
    await createDiscussion(prisma, new Date(), 'Reggae Vibes', 4.3, 'sitarplayer1', 'Exploring the reggae music culture.');
    await createDiscussion(prisma, new Date(), 'Metal Subgenres', 4.4, 'pianist2', 'Diving into the diverse world of metal subgenres.');
    await createDiscussion(prisma, new Date(), 'Best Pizza Toppings', 4.2, 'guitarist1', 'Debating the perfect pizza toppings.');
    await createDiscussion(prisma, new Date(), 'Cat Memes Appreciation', 4.7, 'singer2', 'Sharing and discussing funny cat memes.');
    await createDiscussion(prisma, new Date(), 'Ultimate Superhero Battle', 4.5, 'bassist2', 'Fantasy showdown between superheroes.');
    await createDiscussion(prisma, new Date(), 'Favorite Ice Cream Flavors', 4.3, 'keyboardist2', 'Sharing favorite ice cream flavors and combinations.');
    await createDiscussion(prisma, new Date(), 'Worst Dad Jokes Ever', 4.8, 'trumpetplayer2', 'Sharing and laughing at cringe-worthy dad jokes.');
    await createDiscussion(prisma, new Date(), 'Space Aliens Conspiracy', 4.1, 'trumpetplayer2', 'Discussing wild theories about space aliens.');
    await createDiscussion(prisma, new Date(), 'Best Pizza Slice Folding Technique', 4.6, 'trumpetplayer2', 'Debating the art of folding pizza slices for maximum enjoyment.');
    await createDiscussion(prisma, new Date(), 'Favorite Movie Soundtracks', 4.2, 'bassist2', 'Discussing memorable movie soundtracks.');
    await createDiscussion(prisma, new Date(), 'Indie Rock Bands', 4.0, 'pianist2', 'Exploring the indie rock music scene.');
    await createDiscussion(prisma, new Date(), 'Electronic Music Production', 4.5, 'saxophonist1', 'Sharing tips and tricks for electronic music production.');
    await createDiscussion(prisma, new Date(), 'Latin Music Appreciation', 4.3, 'flutist2', 'Appreciating the diversity of Latin music.');
    await createDiscussion(prisma, new Date(), 'Blues Guitar Legends', 4.6, 'drummer2', 'Celebrating legendary blues guitarists.');
    await createDiscussion(prisma, new Date(), 'Reggaeton Hits', 4.4, 'cellist1', 'Discussing popular reggaeton hits.');
    await createDiscussion(prisma, new Date(), 'Progressive Metal', 4.1, 'violist1', 'Exploring the world of progressive metal music.');
    await createDiscussion(prisma, new Date(), 'Best Air Guitar Performances', 4.0, 'flutist1', 'Ranking the most epic air guitar performances.');
    await createDiscussion(prisma, new Date(), 'Silliest Song Lyrics Ever', 4.2, 'percussionist1', 'Sharing and laughing at silly song lyrics.');
    await createDiscussion(prisma, new Date(), 'Worst Album Covers of All Time', 3.8, 'cellist1', 'Discussing the most cringe-worthy album cover designs.');
    await createDiscussion(prisma, new Date(), 'Unbelievable Band Names', 4.1, 'guitarist2', 'Sharing bizarre and hilarious band names.');
    await createDiscussion(prisma, new Date(), 'Musical Parodies and Spoofs', 4.3, 'guitarist1', 'Enjoying and discussing musical parodies and spoofs.');
    await createDiscussion(prisma, new Date(), 'Most Memorable Karaoke Fails', 3.9, 'drummer1', 'Recalling unforgettable karaoke mishaps and performances.');
    await createDiscussion(prisma, new Date(), 'Musical Misheard Lyrics', 4.4, 'guitarist1', 'Sharing funny misunderstandings of song lyrics.');
}

export async function seedComments(prisma: PrismaClient) {
   await createComment(prisma, new Date(), "i hate this", "guitarist1", 1); 
   await createComment(prisma, new Date(), "i hate this", "guitarist2", 2); 
   await createComment(prisma, new Date(), "i hate this", "guitarist1", 3); 
   await createComment(prisma, new Date(), "i hate this", "pianist2", 1); 
   await createComment(prisma, new Date(), "i hate this", "singer2", 1); 
   await createComment(prisma, new Date(), "i hate this", "bassist2", 1); 
   await createComment(prisma, new Date(), "i love this", "keyboardist2", 3); 
   await createComment(prisma, new Date(), "i love this", "guitarist1", 4); 
   await createComment(prisma, new Date(), "i love this", "guitarist1", 5); 
   await createComment(prisma, new Date(), "i love this", "trumpetplayer2", 1); 
   await createComment(prisma, new Date(), "i love this", "flutist2", 1); 
}

export async function seedReactions(prisma: PrismaClient) {
    await createReaction(prisma, "guitarist1", 1, true, new Date());
    await createReaction(prisma, "guitarist1", 3, true, new Date());
    await createReaction(prisma, "guitarist1", 4, true, new Date());
    await createReaction(prisma, "guitarist1", 2, true, new Date());
    await createReaction(prisma, "singer2", 1, true, new Date());
    await createReaction(prisma, "bassist2", 1, true, new Date());
    await createReaction(prisma, "keyboardist2", 1, true, new Date());
    await createReaction(prisma, "trumpetplayer2", 1, true, new Date());
    await createReaction(prisma, "flutist2", 1, true, new Date());
    await createReaction(prisma, "flutist2", 2, true, new Date());
    await createReaction(prisma, "flutist2", 3, true, new Date());
}

export async function seedHashtags(prisma: PrismaClient) {

}