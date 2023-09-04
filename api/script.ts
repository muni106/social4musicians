import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();

async function ciao() {
    const post = await prisma.genre.create({
        data: {
            genrename: "lello",
            genredescription: "è bello",
            origin: "america"
        }
    });
    
    const all = await prisma.genre.findMany();
    console.log(post);
    console.log(all);
  }
ciao()
.catch(e => {
    console.log(e.message);
})
.finally(async () => {
    await prisma.$disconnect();
})