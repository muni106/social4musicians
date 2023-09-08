import { Prisma, PrismaClient } from "@prisma/client";

// USER SECTION
export async function userCreation(
  prisma: PrismaClient,
  nickname: string,
  firstName: string,
  lastName: string,
  e_mail: string,
  password: string,
  locality: string,
  bestInstrument: string,
  telephoneNumber: string,
  isCertified: boolean,
  isMaster: boolean
) {
  const user = await prisma.musician.create({
    data: {
      nickname: nickname,
      firstname: firstName,
      lastname: lastName,
      e_mail: e_mail,
      locality: locality,
      bestinstrument: bestInstrument,
      telephonenumber: telephoneNumber,
      iscertified: isCertified,
      ismaster: isMaster,
      pass: password,
    },
  });
  console.log(user);
}

export async function createGenre(
  prisma: PrismaClient,
  genreName: string,
  origin: string,
  genreDescription: string
) {
  const genre = await prisma.genre.create({
    data: {
      genrename: genreName,
      genredescription: genreDescription,
      origin: origin
    }
  });
  console.log(genre);
}

export async function followGenre(
  prisma: PrismaClient,
  nickName: string,
  genreName: string
) {
  try {
    //verify musician existence
    const musician = await prisma.musician.findUnique({
      where: { nickname: nickName }, // Replace 1 with the actual ID of the EntityA
      include: { follow: true }, // Include the existing EntityBs related to EntityA
    });
    if (!musician) {
      console.error("musician not found");
      return;
    }

    //verify genre existence
    const existingGenre = await prisma.genre.findUnique({
      where: {
        genrename: genreName,
      },
    });
    if (!existingGenre) {
      console.error("genre not found");
      return;
    }

    const newFollow = await prisma.follow.create({
      data: {
        nickname: nickName,
        genrename: genreName,
      },
    });

    // Step 3: Add the new EntityB to the collection of EntityBs related to EntityA
    const updatedUser = await prisma.musician.update({
      where: { nickname: nickName },
      data: {
        follow: {
          connect: [
            {
              genrename_nickname: newFollow,
            },
          ],
        },
      },
    });

    console.log("EntityB added to EntityA:", updatedUser);
  } catch (error) {
    console.error("Error adding EntityB to EntityA:", error);
  }
}

export async function createHashTag(
  prisma: PrismaClient,
  hashtagName: string,
) {
  const tag = await prisma.hashtag.create({
    data: {
      hashtagname: hashtagName
    }
  })
  return hashtagName;
}

export async function addInfluenceGenre(
  prisma: PrismaClient,
  nickName: string,
  genreName: string
) {
  try {
    //verify musician existence
    const musician = await prisma.musician.findUnique({
      where: { nickname: nickName }, // Replace 1 with the actual ID of the EntityA
      include: { follow: true }, // Include the existing EntityBs related to EntityA
    });
    if (!musician) {
      console.error("musician not found");
      return;
    }

    //verify genre existence
    const existingGenre = await prisma.genre.findUnique({
      where: {
        genrename: genreName,
      },
    });
    if (!existingGenre) {
      console.error("genre not found");
      return;
    }

    const newInfluence = await prisma.influence.create({
      data: {
        nickname: nickName,
        genrename: genreName,
      },
    });

    // Step 3: Add the new EntityB to the collection of EntityBs related to EntityA
    const updatedUser = await prisma.musician.update({
      where: { nickname: nickName },
      data: {
        follow: {
          connect: [
            {
              genrename_nickname: newInfluence,
            },
          ],
        },
      },
    });

    console.log("EntityB added to EntityA:", updatedUser);
  } catch (error) {
    console.error("Error adding EntityB to EntityA:", error);
  }
}

// CHAT CREATIONS
export async function createChat(
  prisma: PrismaClient,
  chatName: string,
) {
  const chat = await prisma.chat.create({
    data: {
      chatname: chatName
    }
  });
  return chat;
}

export async function createMessage(
  prisma: PrismaClient,
  chatTargetID: number,
  nickName: string,
  messageText: string,
  timeStamp: Date 
) {
  try {
    const newMessage = await prisma.message.create({
      data: {
        chatid: chatTargetID,
        nickname: nickName,
        messagetext: messageText,
        timestampmessage: timeStamp
      }
    });
    const participant = await prisma.chat_participant.update({
      where: {
        chatid: chatTargetID,
        nickname: nickName
      },
      data: {
        message: {
          connect: {
            messageid: newMessage.messageid 
          }
        }
      }
    });
    return participant;
  } catch (error) {
    console.error('something went wrong', error);
  }
}

export async function addChatParticipant(
  prisma: PrismaClient,
  nickName: string,
  entry: Date,
  chatID: number
) {
  const participant = await prisma.chat_participant.create({
    data: {
      nickname: nickName,
      entrydate: entry,
      chatid: chatID
    }
  });

}


// POSTS CREATIONS

export async function createDiscussion(
  prisma: PrismaClient,
  timeStamp: Date,
  title: string,
  average: number,
  nickname: string
) {
  const discussion = await prisma.discussion.create({
    data: {
      timestampdiscussion: timeStamp,
      title: title,
      average: average,
      nickname: nickname,
    },
  });

  const user = await prisma.musician.update({
    where: {
      nickname: nickname,
    },
    data: {
      discussion: {
        connect: {
          discussionid: discussion.discussionid,
        },
      },
    },
  });

  return user;
}

export async function createComment(
  prisma: PrismaClient,
  timeStamp: Date,
  text: string,
  sender: string,
  discussion: number
) {
  const comment = await prisma.comment.create({
    data: {
      commenttext: text,
      nickname: sender,
      timestampcomment: timeStamp,
      discussionid: discussion,
    },
  });

  const userComment = await prisma.musician.update({
    where: {
      nickname: sender,
    },
    data: {
      comment: {
        connect: {
          commentid: comment.commentid,
        },
      },
    },
  });
  return userComment;
}

export async function createReaction(
  prisma: PrismaClient, 
  nickName: string,
  discussionID: number,
  vote: boolean,
  timeStamp: Date
  ) { 
    const reactionVal = await prisma.reaction.create({
      data: {
        nickname: nickName,
        discussionid: discussionID,
        vote: vote,
        dateandtime: timeStamp
      }
    });

    const discussion = await prisma.discussion.update({
      where: {
        discussionid: discussionID,
      },
      data: {
        reaction: {
          connect: {
            nickname_discussionid: reactionVal
          }
        }
      }
    });

    const user = await prisma.musician.update({
      where: {
        nickname: nickName
      },
      data: {
        reaction: {
          connect: {
            nickname_discussionid: reactionVal
          }
        }
      }
    });
    return discussion;
}

export async function addHashtagToPost(
  prisma: PrismaClient,
  discussionID: number,
  hashtag: string
) {
  const tag = await prisma.post_reference.create({
    data: {
      discussionid: discussionID,
      hashtagname: hashtag
    }
  });
  
  await prisma.discussion.update({
    where: {
      discussionid: discussionID
    },
    data: {
      post_reference: {
        connect: {
          discussionid_hashtagname: tag
        }
      }
    }
  });

  const hashtags = await prisma.hashtag.update({
    where: {
      hashtagname: hashtag
    },
    data: {
      post_reference: {
        connect: {
          discussionid_hashtagname: tag
        }
      }
    }
  });
  return hashtag;
}


//band part

export async function createBand(
  prisma: PrismaClient,
  bandName: string,
  foundationDate: Date 
){
  const band = await prisma.band.create({
    data: {
      bandname: bandName,
      foundationdate: foundationDate
    }
  });
  return band;
}


export async function createBandMember(
  prisma: PrismaClient,
  nickName: string,
  bandName: string,
  entryTime: Date
) {
  const bandMember = await prisma.band_member.create({
    data: {
      nickname: nickName,
      bandname: bandName,
      entrytimestamp: entryTime
    }
  });

  const band = await prisma.band.update({
    where: {
      bandname: bandName
    },
    data: {
      band_member: {
        connect: {
          nickname_bandname: bandMember,
        }
      }
    }
  });

  await prisma.musician.update({
    where: {
      nickname: nickName,
    },
    data: {
      band_member: {
        connect: {
          nickname_bandname: bandMember,
        }
      }
    }
  });

  return band;
};

export async function createSongByBand(
  prisma: PrismaClient,
  musickTrack: number,
  songName: string,
  duration: number,
  albumID: number,
  bandName: string,
  publicationDate: string
) {
  const song = await prisma.song.create({
    data: {
      musictrack: musickTrack,
      songname: songName,
      duration: duration,
      albumid: albumID
    }
  });

  const writing = await prisma.writing.create({
    data: {
      bandname: bandName,
      songid: song.songid,
      publicationdate: publicationDate
    }
  });

  const band = await prisma.band.update({
    where: {
      bandname: bandName,
    },
    data: {
      writing: {
        connect: {
          songid: song.songid
        }
      }
    }
  });

  return band;
}

export async function createSongByMusician(
  prisma: PrismaClient,
  musickTrack: number,
  songName: string,
  duration: number,
  albumID: number,
  nickName: string,
  publicationDate: string
) {
  const song = await prisma.song.create({
    data: {
      musictrack: musickTrack,
      songname: songName,
      duration: duration,
      albumid: albumID
    }
  });

  const writing = await prisma.writing.create({
    data: {
      nickname: nickName,
      songid: song.songid,
      publicationdate: publicationDate
    }
  });

  const musician = await prisma.musician.update({
    where: {
      nickname: nickName
    },
    data: {
      writing: {
        connect: {
          songid: song.songid
        }
      }
    }
  });

  return musician;
}

export async function createAlbumByBand(
  prisma: PrismaClient,
  albumName: string,
  realeseDate: Date,
  bandName: string
) {
  const album = await prisma.album.create({
    data: {
      albumname: albumName,
      realesedate: realeseDate
    }
  });

  const release = await prisma.release.create({
    data: {
      bandname: bandName,
      albumid: album.albumid,
    }
  });

  const band = await prisma.band.update({
    where: {
      bandname: bandName,
    },
    data: {
      release: {
        connect: {
          albumid: album.albumid 
        }
      }
    }
  });
  return release;
}

export async function createAlbumByAlbum(
  prisma: PrismaClient,
  albumName: string,
  realeseDate: Date,
  nickName: string
) {
  const album = await prisma.album.create({
    data: {
      albumname: albumName,
      realesedate: realeseDate
    }
  });

  const release = await prisma.release.create({
    data: {
      nickname: nickName,
      albumid: album.albumid,
    }
  });

  const musician = await prisma.musician.update({
    where: {
      nickname: nickName
    },
    data: {
      release: {
        connect: {
          albumid: album.albumid 
        }
      }
    }
  });
  return release;
}