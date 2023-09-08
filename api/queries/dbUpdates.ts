import { Prisma, PrismaClient } from "@prisma/client";

// USER UPDATES
export async function updateEmail(
  prisma: PrismaClient,
  nickname: string,
  e_mail: string
) {
  const artist = await prisma.artist.update({
    where: {
      nickname: nickname,
    },
    data: {
      e_mail: e_mail,
    },
  });
  return artist;
}

export async function updatePassword(
  prisma: PrismaClient,
  nickname: string,
  password: string
) {
  const artist = await prisma.artist.update({
    where: {
      nickname: nickname,
    },
    data: {
      pass: password,
    },
  });
  return artist;
}

export async function updateLocality(
  prisma: PrismaClient,
  nickname: string,
  locality: string
) {
  const artist = await prisma.artist.update({
    where: {
      nickname: nickname,
    },
    data: {
      locality: locality,
    },
  });
  return artist;
}

export async function updateTelephone(
  prisma: PrismaClient,
  nickname: string,
  telephoneNumber: string
) {
  const artist = await prisma.artist.update({
    where: {
      nickname: nickname,
    },
    data: {
      telephonenumber: telephoneNumber,
    },
  });
  return artist;
}

export async function updateBestInstrument(
  prisma: PrismaClient,
  nickname: string,
  bestInstrument: string
) {
  const artist = await prisma.artist.update({
    where: {
      nickname: nickname,
    },
    data: {
      bestinstrument: bestInstrument,
    },
  });
  return artist;
}

export async function certifyUser(
  prisma: PrismaClient,
  nickname: string,
  certification: boolean
) {
  const artist = await prisma.artist.update({
    where: {
      nickname: nickname,
    },
    data: {
      iscertified: certification,
    },
  });
  return artist;
}

export async function masterifyUser(
  prisma: PrismaClient,
  nickname: string,
  master: boolean
) {
  const artist = await prisma.artist.update({
    where: {
      nickname: nickname,
    },
    data: {
      ismaster: master,
    },
  });
  return artist;
}

export async function updateHashtagObserved(
  prisma: PrismaClient,
  nickName: string,
  hashtag: string
) {
  const obs = await prisma.observation.findFirst({
    where: {
      nickname: nickName,
      hashtagname: hashtag,
    },
  });
  if (!obs) {
    const observasionUpdate = await prisma.observation.create({
      data: {
        nickname: nickName,
        hashtagname: hashtag,
      },
    });

    const user = await prisma.artist.update({
      where: {
        nickname: nickName,
      },
      data: {
        observation: {
          connect: {
            hashtagname_nickname: observasionUpdate,
          },
        },
      },
    });

    await prisma.hashtag.update({
      where: {
        hashtagname: hashtag,
      },
      data: {
        observation: {
          connect: {
            hashtagname_nickname: observasionUpdate,
          },
        },
      },
    });
    return user;
  }
}

// CHAT UPDATES

export async function exitChatParticipant(
  prisma: PrismaClient,
  nickName: string,
  chatID: number,
  exitDate: Date
) {
  const user = await prisma.chat_participant.findUnique({
    where: {
      chatid: chatID,
      nickname: nickName,
    },
  });
  if (!user) {
    console.log("user not found");
  } else if (!user.exitdate) {
    const exitedUser = await prisma.chat_participant.update({
      where: {
        chatid: chatID,
        nickname: nickName,
      },
      data: {
        exitdate: exitDate,
      },
    });
    return exitedUser;
  } else {
    console.log("user already exited");
    return user;
  }
}

// POSTS UPDATES
export async function updateDiscussionTitle(
  prisma: PrismaClient,
  newTitle: string,
  discussionID: number
) {
  const discussion = await prisma.discussion.update({
    where: {
      discussionid: discussionID,
    },
    data: {
      title: newTitle,
    },
  });
  console.log(discussion);
}

//BAND UPDATES

export async function exitBand(
  prisma: PrismaClient,
  exitDate: string,
  nickName: string,
  bandName: string
) {
  await prisma.band_member.update({
    where: {
      nickname_bandname: { nickname: nickName, bandname: bandName },
    },
    data: {
      exittimestamp: exitDate,
    },
  });
}

export async function changeAlbumName(
  prisma: PrismaClient,
  albumID: number,
  newName: string
) {
  const album = await prisma.album.update({
    where: {
      albumid: albumID,
    },
    data: {
      albumname: newName,
    },
  });
  return album;
}

export async function addSongToAlbum(
  prisma: PrismaClient,
  songID: number,
  albumID: number
) {
  const song = await prisma.song.findUnique({
    where: {
      songid: songID,
    },
  });

  if (!song) {
    console.log("song not exist");
    return;
  }

  const album = await prisma.album.update({
    where: {
      albumid: albumID,
    },
    data: {
      song: {
        connect: {
          songid: song?.songid,
        },
      },
    },
  });

  return album;
}

export async function addSongGenre(
  prisma: PrismaClient,
  songID: number,
  genreName: string
) {
  const genre = await prisma.genre.findUnique({
    where: {
      genrename: genreName,
    },
  });

  if (!genre) {
    console.log("genre not found");
    return;
  }

  const song = await prisma.song.update({
    where: {
      songid: songID,
    },
    data: {
      appartainance: {
        connect: {
          genrename: genreName,
        },
      },
    },
  });
  return song;
}
