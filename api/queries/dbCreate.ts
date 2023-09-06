import { PrismaClient } from "@prisma/client";

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

//band part
