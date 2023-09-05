import { PrismaClient } from "@prisma/client";

export async function createDiscussion(
  prisma: PrismaClient,
  timeStamp: Date,
  title: string,
  average: number

) {
  const discussion = await prisma.discussion.create({
    data: {
        timestampdiscussion: timeStamp,
        title: title,
        average: average 
    },
  });
  return discussion;
}


