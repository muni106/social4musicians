import { PrismaClient } from "@prisma/client";

// USER GETTERS
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

export async function followGenre(prisma: PrismaClient, nickName: string, genreName: string) {
    try {
      //verify musician existence
      const musician = await prisma.musician.findUnique({
        where: { nickname: nickName }, // Replace 1 with the actual ID of the EntityA
        include: { follow: true}, // Include the existing EntityBs related to EntityA
      });
      if (!musician) {
        console.error('musician not found');
        return;
      }

      //verify genre existence
      const existingGenre = await prisma.genre.findUnique({
        where: {
            genrename: genreName,
        }
      });
      if (!existingGenre) {
      console.error('genre not found');
      return;
    }

      const newFollow = await prisma.follow.create({
        data: {
          nickname: nickName,
          genrename: genreName
        }
      })

      // Step 3: Add the new EntityB to the collection of EntityBs related to EntityA
      const updatedUser = await prisma.musician.update({
        where: { nickname: nickName},
        data: {
          follow: {
            connect: [{
              nickname: newFollow.nickname,
              genrename: newFollow.genrename
            }]
          },
        },
      });
  
      console.log('EntityB added to EntityA:', updatedUser );
    } catch (error) {
      console.error('Error adding EntityB to EntityA:', error);
    } 
}

export async function follow(prisma: PrismaClient, nickName: string, genreName: string) {
  try {
    // Replace the following values with your actual data
    const newFollow = await prisma.follow.create({
      data: {
        genrename: genreName,
        nickname: nickName,
        genre: {
          connect: {
            genrename: genreName,
          },
        },
        musician: {
          connect: {
            nickname: nickName,
          },
        },
      },
    });

    console.log('musician follow new genre succed:', newFollow);
  } catch (error) {
    console.error('Error creating follow instance:', error);
  } 
}

// CHAT GETTERS



// POSTS GETTERS
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


//BAND GETTERS
