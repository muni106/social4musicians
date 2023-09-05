import { PrismaClient } from "@prisma/client";






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

export async function certify(
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

export async function masterify(
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


