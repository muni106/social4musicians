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
