
import { PrismaClient, UserRole } from '@prisma/client';
//https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/querying-the-database-typescript-postgresql
const prisma = new PrismaClient();

async function main() {
    


  // create user 

  /*const createUser=await prisma.user.createMany({
    data:[
        {username:"user2",email:"user2@ph.com",role:UserRole.user}
    ]
  });
  console.log(createUser);*/

  // create profile 

  /*const createProfile=await prisma.profile.createMany({
    data:[
        {userId:1,bio:"this is my bio"}
    ]
  });
  console.log(createProfile);*/

  // create categories
 /* const createCategorie=await prisma.category.createMany({
    data:[
        {name:"Js"},
        {name:"programming"},
        {name:"softwere engineering"}
    ]
  });

  console.log(createCategorie);*/

  // cretae post

  /*const createPost=await prisma.post.create({
    data:{
        title:"this title 5",
        content:"this is content of the post 5",
        authorId:2,
        postCategory:{
            create:[
                {categoryId:1},
                {categoryId:3},
                {categoryId:4}
            ]
        }
    },
    include:{
        postCategory:true
    }
  });

  console.log(createPost);*/


  

  

   
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })