import { PrismaClient } from "@prisma/client";


const prisma=new PrismaClient();

const deletePrisma=async()=>{

    // single delete

    // const result=await prisma.post.delete({where:{
    //     id:6
    // }});

    // console.log(result);

    // multiple delete
    /*const result=await prisma.post.deleteMany({
        where:{
            published:false
        }
    });*/
// delete many
    const result=await prisma.post.deleteMany({});
    console.log(result);

    console.log(result);


}

deletePrisma();