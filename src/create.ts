
import { PrismaClient } from '@prisma/client';
//https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/querying-the-database-typescript-postgresql
const prisma = new PrismaClient();

async function main() {
    


    // create  Data in to db
    const result=await prisma.post.createMany({
        data:[
            {
            title:"This is Title 4",
            content:"This is Content 4 ",
            authorName:"author1"
            },
            {
                title:"This is Title 5",
                content:"This is Content 4",
                authorName:"author2"
                },
                {
                    title:"This is Title 6",
                    content:"This is Content 6 ",
                    authorName:"author3"
                    },
                    {
                        title:"This is Title 7",
                        content:"This is Content 7 ",
                        authorName:"author4"
                        },
                        {
                            title:"This is Title 8",
                            content:"This is Content 8 ",
                            authorName:"author5"
                            },{
                                title:"This is Title 9",
                                content:"This is Content 9 ",
                                authorName:"author6"
                                },{
                                    title:"This is Title 10",
                                    content:"This is Content 10 ",
                                    authorName:"author7"
                                    },{
                                        title:"This is Title 11",
                                        content:"This is Content 11",
                                        authorName:"author8"
                                        },{
                                            title:"This is Title 12",
                                            content:"This is Content 12 ",
                                            authorName:"author9"
                                            },{
                                                title:"This is Title 13",
                                                content:"This is Content 13 ",
                                                authorName:"author10"
                                                },{
                                                    title:"This is Title 14",
                                                    content:"This is Content 14",
                                                    authorName:"author11"
                                                    },{
                                                        title:"This is Title 15",
                                                        content:"This is Content 15 ",
                                                        authorName:"author12"
                                                        },{
                                                            title:"This is Title 16",
                                                            content:"This is Content 16 ",
                                                            authorName:"author13"
                                                            },{
                                                                title:"This is Title 17",
                                                                content:"This is Content 17 ",
                                                                authorName:"author14"
                                                                },{
                                                                    title:"This is Title 18",
                                                                    content:"This is Content 18 ",
                                                                    authorName:"author15"
                                                                    },{
                                                                        title:"This is Title 19",
                                                                        content:"This is Content 19 ",
                                                                        authorName:"author16"
                                                                        },{
                                                                            title:"This is Title 20",
                                                                            content:"This is Content 20 ",
                                                                            authorName:"author17"
                                                                            },{
                                                                                title:"This is Title 21",
                                                                                content:"This is Content 21",
                                                                                authorName:"author18"
                                                                                },{
                                                                                    title:"This is Title 22",
                                                                                    content:"This is Content 22 ",
                                                                                    authorName:"author19"
                                                                                    },
                                                                                    {
                                                                                        title:"This is Title 23",
                                                                                        content:"This is Content 23 ",
                                                                                        authorName:"author20"
                                                                                        }
                                                                                        ,
                                                                                        {
                                                                                            title:"This is Title 24",
                                                                                            content:"This is Content 24 ",
                                                                                            authorName:"author21"
                                                                                            },
                                                                                            {
                                                                                                title:"This is Title 25",
                                                                                                content:"This is Content 25 ",
                                                                                                authorName:"author22"
                                                                                                }
        ]
    });

    console.log(result);
  
    

   
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