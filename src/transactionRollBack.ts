import { PrismaClient } from "@prisma/client";


//https://www.prisma.io/docs/orm/prisma-client/queries/transactions
const prisma=new PrismaClient();

const  transactionRollBack =async()=>{

    const createUser=  prisma.user.create({
        data:{
            username:"A M Sohel Rana",
            email:"amsohelrana.me@gmail.com"
        }
    });

   
    const updateUser= prisma.user.update({
        where:{
            id:3
        },
        data:{
            age:30
        }
    });

    //transaction roll back 
    
    const [userData,updateData]=await prisma.$transaction([
        createUser,updateUser
    ]);

    console.log(userData);
    console.log(updateData);
    
 


}
transactionRollBack();