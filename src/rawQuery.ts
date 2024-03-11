import { PrismaClient } from "@prisma/client";

const prisma=new PrismaClient();


//https://www.prisma.io/docs/orm/prisma-client/queries/raw-database-access/raw-queries#raw-query-type-mapping
const rawQuery = async () => {

   /*const posts=await prisma.$queryRaw `SELECT * FROM posts where id=4`

   console.log(posts);*/

   // delete user table data 

   const deleteUsers=await prisma.$queryRaw `TRUNCATE table category CASCADE`;
   console.log(deleteUsers);




}
rawQuery();