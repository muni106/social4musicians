import { PrismaClient } from "@prisma/client";

export async function userCreation(
  prisma: PrismaClient,
  nickname: string,
  firstName: string,
  lastName: string,
  e_mail: string,
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
    },
  });
  console.log(user);
}

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


