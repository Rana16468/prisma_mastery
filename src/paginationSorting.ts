import { PrismaClient } from "@prisma/client"

const prisma=new PrismaClient();

const paginationSorting=async()=>{
//const offSetData=await prisma.post.findMany({skip:5,take:2});
//console.log(offSetData);
// cursor base pagination 

/*const coursorData=await prisma.post.findMany({cursor:{
    id:15
},skip:5,take:2});

console.log(coursorData);*/

// sorting ---> asc dsc
const sorting=await prisma.post.findMany({
    orderBy:{
       id:'asc'

    },
    skip:2,
    take:3,
    where:{
        title :"This is Title 3"
    }
});

console.log(sorting);
}



paginationSorting();