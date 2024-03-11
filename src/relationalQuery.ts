import { PrismaClient } from "@prisma/client";

const prisma=new PrismaClient();


const relationalQuery=async()=>{

    // flunt Api
    const result=await prisma.user.findUnique({where:{
        id:1,
        
    }/*,include:{
        post:true
    }*/}).user();

   // console.log(result);
   // relational filter

   

   const publishPostUser=await prisma.user.findMany({
    include:{
        post:{
            where:{
                published:true
            }
        }
    }
   
});
console.dir(publishPostUser,{depth:Infinity});


}

relationalQuery();