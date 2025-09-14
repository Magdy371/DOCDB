import { PrismaClient } from "./generated/prisma"
const prisma = new PrismaClient();

async function UserCRUD(){
    /*
    *
    const updatedUser  =  await prisma.user.update({
        where:{id:"8fb22596-b46b-4049-b913-1f18a3b91a75"},
        data:{phone:"01010119471",isAdmin:"USER"}
    })
    console.log(`the updated username: is ${updatedUser.name}
    Phone: ${updatedUser.phone} UserRole: ${updatedUser.isAdmin}`);
    * */
    //const allUsers = await  prisma.user.deleteMany();
    /*
    * const user = await prisma.user.create({
        data: {
            name: "Ahmed Elshrief",
            email: "Ahmed_Elshrief@gmail.com",
            phone: "01012319471",
            hobbies: JSON.stringify({hobby1: "Manga Yaoi", hobby2: "Football"}),
            isAdmin: "ADMIN",
            profile:{create: {
                emailUpdated: true,
                bio: "I am a full stack js with 1 years of experience."
                }
            }
        },include:{profile:true}
        const users = await prisma.user.findMany({
        select:{
            name:true,
            email:true,
            profile:{select:{bio:true}}
        }
    });
    console.log(users);
    });*/
    const manyUsers = await prisma.user.createMany({data:[
            {
                name: "Ramy Elshrief",
                email: "ahmedel-shrief@gmail.com",
                phone: "01043319471",
                hobbies: JSON.stringify({hobby1: "Manga Yaoi", hobby2: "Football"}),
                isAdmin: "ADMIN"
            },
            {
                name: "Mohamed Elshrief",
                email: "mohamed-shrief@gmail.com",
                phone: "01043212471",
                hobbies: JSON.stringify({hobby1: "Manga", hobby2: "VollyBall"}),
                isAdmin: "USER"
            }
        ]});
    const users = await prisma.user.findMany({
        select:{
            name:true,
            email:true,
            profile:{select:{bio:true}}
        }
    });
    console.log(users);
}
UserCRUD().then(()=>{
    console.log('CRUD Sucedded')
}).catch((err)=>{
    console.error('CRUD Failed',err.message);
}).finally(async()=>{
    prisma.$disconnect();
});