import {PrismaClient} from "@prisma/client"
const prisma = new PrismaClient()

async function main() {
    const post = await prisma.user.create({
      data: {
            name:"johanna"
        }
    });
    const all = await prisma.user.findMany();
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