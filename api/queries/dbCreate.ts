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
