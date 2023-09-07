import { PrismaClient } from "@prisma/client";

// USER GETTERS
export async function getMusicianAccount(
  prisma: PrismaClient,
  nickname: string
) {
  const musician = await prisma.musician.findUnique({
    where: {
      nickname: nickname,
    },
  });
  return musician;
}

export async function getMusicianProfile(
  prisma: PrismaClient,
  nickname: string
) {
  const musician = await prisma.musician.findUnique({
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
        ismaster: true
    }
  });
  return musician;
}

// CHAT GETTERS
export async function getChatMessages(
  prisma: PrismaClient,
  chatID: number
) {
  const chat = await prisma.chat.findUnique({
    where: {
      chatid: chatID
    },
    include: {
      message: true,
    }
  });
  return chat?.message;
}


// POSTS GETTERS


//BAND GETTERS