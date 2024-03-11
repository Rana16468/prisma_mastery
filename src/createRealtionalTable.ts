import { PrismaClient, UserRole } from "@prisma/client";


const prisma=new PrismaClient();

const createRealtionalTable=async()=>{

   // added user table data 

   /*const createUser=await prisma.user.createMany({
    data:[
        {username:"user1",email:"user1@ph.com",role:UserRole.user},
        {username:"user2",email:"user2@ph.com",role:UserRole.user},
        {username:"user3",email:"user3@ph.com",role:UserRole.user},
        {username:"user4",email:"user4@ph.com",role:UserRole.admin}
    ]
  });
  console.log(createUser);*/

  // added profile table  data 
  /*const createProfile=await prisma.profile.createMany({
    data:[
        {userId:1,bio:"I am User 1"},
        {userId:2,bio:"I am User 2"},
        {userId:3,bio:"I am User 3"},
        {userId:4,bio:"I am User 4 Admin"}
    ]
  });
  console.log(createProfile);*/

  // added categories table data 

  /*const createCategorie=await prisma.category.createMany({
    data:[
        {name:"Web Development"},
        {name:"Softwere Engineering"},
        {name:"System  Architecture"},
        {name:"System Design"}
    ]
  });
  console.log(createCategorie);*/

  // added post table data 
  const createPost=await prisma.post.create({
   data:{
    title:"this is title 4",content:"This is Content of the post 4",authorId:4,postCategory:{
        create:[
            {categoryId:4},
            {categoryId:3}
           
        ]
    }
    
   },
   include:{
    postCategory:true
   }
        
  });

  console.log(createPost);


}
createRealtionalTable();