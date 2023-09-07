import { PrismaClient } from "@prisma/client";

// USER UPDATES
export async function updateEmail(
  prisma: PrismaClient,
  nickname: string,
  e_mail: string
) {
  const musician = await prisma.musician.update({
    where: {
      nickname: nickname,
    },
    data: {
      e_mail: e_mail,
    }
  });
  return musician;
}

export async function updatePassword(
  prisma: PrismaClient,
  nickname: string,
  password: string
) {
  const musician = await prisma.musician.update({
    where: {
      nickname: nickname,
    },
    data: {
      pass: password,
    }
  });
  return musician;
}

export async function updateLocality(
  prisma: PrismaClient,
  nickname: string,
  locality: string
) {
  const musician = await prisma.musician.update({
    where: {
      nickname: nickname,
    },
    data: {
      locality: locality,
    }
  });
  return musician;
}

export async function updateTelephone(
  prisma: PrismaClient,
  nickname: string,
  telephoneNumber : string
) {
  const musician = await prisma.musician.update({
    where: {
      nickname: nickname,
    },
    data: {
      telephonenumber: telephoneNumber,
    }
  });
  return musician;
}

export async function updateBestInstrument(
  prisma: PrismaClient,
  nickname: string,
  bestInstrument: string
) {
  const musician = await prisma.musician.update({
    where: {
      nickname: nickname,
    },
    data: {
      bestinstrument: bestInstrument,
    }
  });
  return musician;
}

export async function certifyUser(
  prisma: PrismaClient,
  nickname: string,
  certification: boolean 
) {
  const musician = await prisma.musician.update({
    where: {
      nickname: nickname,
    },
    data: {
      iscertified: certification,
    }
  });
  return musician;
}

export async function masterifyUser(
  prisma: PrismaClient,
  nickname: string,
  master: boolean 
) {
  const musician = await prisma.musician.update({
    where: {
      nickname: nickname,
    },
    data: {
      ismaster: master,
    }
  });
  return musician;
}

export async function updateHashtagObserved(
  prisma: PrismaClient,
  nickName: string,
  hashtag: string
) {
  const obs = await prisma.observation.findFirst({
    where: {
      nickname: nickName,
      hashtagname: hashtag
    }
  });
  if(!obs) {
    const observasionUpdate = await prisma.observation.create({
      data: {
        nickname: nickName,
        hashtagname: hashtag
      }
    });
    
    const user = await prisma.musician.update({
      where: {
        nickname: nickName
      },
      data: {
        observation: {
          connect: {
            hashtagname_nickname: observasionUpdate
          }
        }
      }
    });

    await prisma.hashtag.update({
      where: {
        hashtagname: hashtag
      },
      data: {
        observation: {
          connect: {
            hashtagname_nickname: observasionUpdate
          }
        }
      }
    });
    return user;
  };
}




// CHAT UPDATES


// POSTS UPDATES
export async function updateDiscussionTitle(
  prisma: PrismaClient,
  newTitle: string,
  discussionID: number 
) {
  const discussion = await prisma.discussion.update({
    where: {
        discussionid: discussionID
    },
    data: {
      title: newTitle,
    }
  });
  console.log(discussion);
}



//BAND UPDATES
