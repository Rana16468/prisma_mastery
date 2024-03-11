import { PrismaClient } from "@prisma/client";


//https://www.prisma.io/docs/orm/prisma-client/queries/aggregation-grouping-summarizing#return-a-relations-count-with-select
const prisma=new PrismaClient();

const aggregate=async()=>{

    //  find avergae age 

    /*const avgAge=await prisma.user.aggregate({
        _avg:{
            age:true
        }
    });

    console.log(avgAge._avg);*/

    // find some of age 

    /*const sumAge=await prisma.user.aggregate({
        _sum:{
            age:true
        }
    });

    console.log(sumAge);*/

    // find count
   /* const countAge=await prisma.user.aggregate({
        _count:{
            age:true
        }
    });

    console.log(countAge);
    // find number of records

    const countRecord=await prisma.user.count();
    console.log(countRecord);*/

    // find max age 

    const maxAge=await prisma.user.aggregate({
      _max:{
        age:true
      }
    });

    console.log(maxAge);

    const minAge=await prisma.user.aggregate({
        _min:{
          age:true
        }
      });
  
      console.log(minAge);





}

aggregate();