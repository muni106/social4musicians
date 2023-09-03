import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    const post = await prisma.genre.create({
        data: {
            genrename: "Hip-hop",
            genredescription: "è bello",
            origin: "america"
        }
    });
    
    const all = await prisma.genre.findMany();
    console.log(post);
    console.log(all);
  }
main()
.catch(e => {
    console.log(e.message);
})
.finally(async () => {
    await prisma.$disconnect();
})