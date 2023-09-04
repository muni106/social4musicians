import { PrismaClient } from '@prisma/client';

export async function seedGenre(prisma: PrismaClient) {
    const post = await prisma.genre.create({
        data: {
            genrename: "weiggw",
            genredescription: "è bello",
            origin: "america"
        }
    })
    console.log(post);
  }
