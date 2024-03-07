import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main()
{
// find All
    const getAllFormDb=await prisma.post.findMany();
   // console.log(getAllFormDb);
     
   // find First
    const findFast=await prisma.post.findFirst({where:{
        id:2
    }});
    // find first Throw Which is provide error handeling
//    const findFast1=await prisma.post.findFirstOrThrow({where:{
//     published:false
// }});
//console.log(findFast1);


// find unique 
const findUnique=await prisma.post.findUniqueOrThrow({where:{id:8},select:{
    title:true,content:true,authorName:true
}});
console.log(findUnique);
}

main();
