import { Prisma, PrismaClient, artist, discussion } from "@prisma/client";

// USER GETTERS
export async function getAllArtists(
  prisma: PrismaClient,
) {
  const allArtists = await prisma.artist.findMany({
    include: {
      chat_participant: true
    }
  });
  return allArtists;
}

export async function getAllMusicians(
  prisma: PrismaClient,
) {
  const allArtists = await prisma.artist.findMany({
  });
  return allArtists;
}
export async function getAllNicknames(
  prisma: PrismaClient,
) {
  const allArtists = await prisma.artist.findMany({
    include: {
      chat_participant: true
    }
  });
  return allArtists.map(x => x.nickname);
}

export async function getAllFollowing(
  prisma: PrismaClient,
  nickname:string
) {
  const gen = await prisma.follow.findMany({
    where: {
      nickname: nickname
    }
  });
  
  return gen.map(x => x.genrename);
}


export async function getAllGenres(prisma: PrismaClient) {
  const genres = await prisma.genre.findMany({});
  return genres;
}


export async function getMusicianAccount(
  prisma: PrismaClient,
  nickname: string
) {
  const musician = await prisma.artist.findUnique({
    where: {
      nickname: nickname,
    },
  });
    return musician;
}

export async function getMusicianByEmail( 
  prisma: PrismaClient,
  email: string
) {
  const musician = await prisma.artist.findUnique({
    where: {
      e_mail: email,
    },
  });
  return musician;
}

export async function getMusiciansByGenre(prisma: PrismaClient, genre:string){
  const artists = await prisma.influence.findMany({
    where: {
      genrename: genre
    }
  }) 
  return artists.map(x => x.nickname);
}

export async function getMusicianProfile(
  prisma: PrismaClient,
  nickname: string
) {
  const musician = await prisma.artist.findUnique({
    where: {
      nickname: nickname,
    },
    select: {
      nickname: true,
      firstname: true,
      lastname: true,
      e_mail: true,
      locality: true,
      bestinstrument: true,
      iscertified: true,
      ismaster: true,
    },
  });
  return musician;
}

// CHAT GETTERS
export async function getChatMessages(prisma: PrismaClient, chatID: number) {
  const participant = await prisma.chat_participant.findMany({
    where: {
      chatid: chatID,
    },
    include: {
      message: true,
    },
  });
  const messages = participant.map((x) => x.message).flat(1);
  return messages;
}

export async function getAllChats(prisma: PrismaClient) {
  const chats = await prisma.chat.findMany({});
  return chats;
}

export async function getChatParticipants(prisma: PrismaClient) {
  const chatParticipants = (await getAllArtists(prisma)).map(x => x.chat_participant).flat(1);
  return chatParticipants;
}

// POSTS GETTERS
export async function getAllDiscussions(prisma: PrismaClient) {
  const allDisc = await prisma.discussion.findMany({});
  return allDisc;
}

export async function getDiscussionByNickname(prisma:PrismaClient, nickname:string) {
  const discussions = await prisma.discussion.findMany({
    where : {
      nickname: nickname
    }
  })

  return discussions;
} 

export async function getDiscussionByGenre(prisma:PrismaClient, genre:string) {
  const discussions:discussion[] = [];
  const nicknames: Promise<string[]> = getMusiciansByGenre(prisma, genre);
  nicknames.then(x => x.forEach(nickname => {
    getDiscussionByNickname(prisma, nickname).then(x => x.forEach(el => discussions.push(el)));
  }))
  return discussions;
}

export async function getDiscussionForFeed(prisma:PrismaClient, nickname:string) {
  let discussions:discussion[] = [];
  const genres = getAllFollowing(prisma, nickname);
  genres.then(x => x.forEach(el => {
    getDiscussionByGenre(prisma, el).then(x => x.forEach( disc => discussions.push(disc)))
  }));
  return discussions;
}

export async function getAllHashtags(prisma: PrismaClient) {
  const allHashtags = await prisma.hashtag.findMany({});
  return allHashtags;
}
//BAND GETTERS
export async function getAllBands(prisma: PrismaClient) {
  const allBands = await prisma.band.findMany({});
  return allBands;
}

export async function getBandByBandName(
  prisma: PrismaClient,
  bandName: string
  ) {
    const band = await prisma.band.findUnique({
      where: {
        bandname: bandName
      }
    });

    return band;
  }

export async function getAllSongs(prisma: PrismaClient) {
  const allSongs = await prisma.song.findMany({});
  return allSongs;
}

export async function getArtistSongs(
  prisma: PrismaClient,
  nickName: string,
) {
  const artist = await getMusicianAccount(prisma, nickName);
  if(!artist) {
    console.log("artist not found");
    return;
  }
  const songs = await prisma.song.findMany({
    where: {
      nickname: artist?.nickname
    }
  });
  return songs;
}

export async function getBandSongs(
  prisma: PrismaClient,
  bandName: string,
) {
  const band = await getBandByBandName(prisma, bandName);
  if(!band) {
    console.log("band not found");
    return;
  }

  const songs = await prisma.song.findMany({
    where: {
      bandname: band.bandname,
    }
  });

  return songs;
}