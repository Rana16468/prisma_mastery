import { PrismaClient } from "@prisma/client";



const prisma=new PrismaClient({
    log:[
        {emit:"event",level:"query"}
    ]
});

prisma.$on("query",(event)=>{
    console.log(event.query);
    console.log(event.duration);
    console.log(event.timestamp);

})

const login=async()=>{


    const getAllFromDb=await prisma.post.findMany();
    //console.log(getAllFromDb);

}

login();