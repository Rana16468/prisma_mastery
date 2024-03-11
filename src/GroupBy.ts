import { PrismaClient } from "@prisma/client";


const prisma=new PrismaClient();

const GroupBy=async()=>{

    const group=await prisma.post.groupBy({
        by:['published'],
        _count:{
            published:true
        },
        // where are haveing both are same
        having:{
            authorId:{
               _sum:{
                gt:2
               }
            }
        }
    });

    console.log(group);


}
GroupBy();