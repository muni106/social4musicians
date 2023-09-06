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
        nickname: nickname
    },
  });
  return discussion;
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
        discussionid: discussion
    },
  });
  return comment;
}


//band part 