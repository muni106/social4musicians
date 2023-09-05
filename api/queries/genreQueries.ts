import { PrismaClient } from "@prisma/client";

export async function createDiscussion(
  prisma: PrismaClient,
  genrename: string,
  genredescription: string,
  origin: string 

) {
  const genre = await prisma.genre.create({
    data: {
        genrename: genrename,
        genredescription: genredescription,
        origin: origin 
    },
  });
  return genre;
}