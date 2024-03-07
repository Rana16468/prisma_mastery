
import { PrismaClient } from '@prisma/client';
//https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/querying-the-database-typescript-postgresql
const prisma = new PrismaClient();

async function main() {
    


    // post Data
    /*const result=await prisma.post.create({
        data:{
            title:"This is Title 2",
            content:"This is Content 2 ",
            authorName:"Sohel Rana"
        }
    });
  
    

    console.log(result);*/

    //  // find data
    /*const getAllFormDb=await prisma.post.findMany();
    console.log(getAllFormDb);*/
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })