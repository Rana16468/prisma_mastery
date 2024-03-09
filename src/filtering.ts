import { PrismaClient } from "@prisma/client";


const prisma=new PrismaClient();

const filtering=async()=>{

    /*const andFilter=await prisma.post.findMany({
        where:{
            AND:[
                {title:{
                    contains:"title"
                }},
                {published:true}
            ]
        }
    });*/

    //console.log(andFilter);

   /* const orFilter=await prisma.post.findMany({
        where:{
            OR:[
                {title:{
                    contains:"title"
                }},
                {published:false}
            ]
        }
    });

    console.log(orFilter);*/


    // not filtering 

    /*const notFiltering=await prisma.post.findMany({

        where:{
            NOT:[
                {title:{
                    contains:"title"
                }}
            ]
        }
    });

    console.log(notFiltering);*/


    // startWith 

   /* const startWith=await prisma.user.findMany({

        where:{
            email :{
                startsWith:"user1"
            }

        }
    });

    console.log(startWith);*/

    // equal operator 

    /*const equal=await prisma.user.findMany({
        where:{
            username:{
                equals:"user1"
            }
        }
    });

    console.log(equal);*/

    // looping in prisma 

   /* const userName=['user1','user2','user3'];

    const ussernameByArray=await prisma.user.findMany({

        where:{
            username :{
                in:userName
            }
        }
    });

    console.log(ussernameByArray);*/



    const inddeepdata=await prisma.user.findUnique({
        where:{
            id:2
        },
        include:{
            post:{
                include:{
                    postCategory:{
                        include:{
                            category:true
                        }
                        
                    }
                }
            }
            
        }
    });

    console.dir(inddeepdata,{depth:Infinity});

   


}

filtering();