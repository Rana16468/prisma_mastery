import { PrismaClient } from "@prisma/client";


const prisma=new PrismaClient();

//https://www.prisma.io/docs/orm/prisma-client/queries/transactions#interactive-transactions
const InteractiveTransaction=async()=>{

    const result=await prisma.$transaction(async(transactionClient)=>{

        // query 1
        const getAllPost=await transactionClient.post.findMany({
            where:{
                published:true
            }
        });
        // query 2
        const countUser=await transactionClient.user.count();
        // query 3
        const updateUser=await transactionClient.user.update({
            where:{
                id:6
            },
            data:{
                age:24
            }
        });

        return {
            getAllPost,
            countUser,
            updateUser

        }
        
    });

   console.log(result)

    


}
InteractiveTransaction();