import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    const post = await prisma.post.create({
      data: {
            id: 20,
            first_name: "Mounir",
            last_name: "Samite"
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