import { PrismaClient } from "@prisma/client";


const prisma=new PrismaClient();

const update=async()=>{

    /*const result=await prisma.post.update({where:{
        id:5

    },data:{title:"title 6",content:"content 6",authorName:"author 4"}});

    console.log(result);*/

    // update many

    /*const updateMany=await prisma.post.updateMany({
        where:{
            title:"title 6"
        },
        data:{
            published:true
        }
    });

    console.log(updateMany);*/

    const result=await prisma.post.upsert({
        where:{
            id:8
        },
        update:{
            title:"Title 2",
            content:"content 2",
            authorName:"Sohel Rana"
        },
        create:{
            title:"Title 1",
            content:"content 1"
        }

    });
    console.log(result);
}

update();