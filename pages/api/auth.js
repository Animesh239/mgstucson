// This is the API route for getting all users from the database at /api/user/auth

import { db } from "@/lib/db";
import { NextResponse } from "next/server";

// export const config = {
//   runtime: "edge",
// };

// import { PrismaClient } from "@prisma/client";

// const db = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const users = await db.user.findMany();
      res.status(200).json(users);

    } catch (err) {
      console.error(err);
      return NextResponse.error(
        new Error("An error occurred. Please try again.")
      );
    }
  }

//   if(req.method === "POST"){
//     try{
//       const body = await req.json();
//       const { email, password, username, role } = body;
      
//       // check if email already exists
//       const existingUser = await db.user.findUnique({
//         where: { email : email }, 
//       });
     
//       if (existingUser) {
//         return NextResponse.json({message : 'User with this email already Exists'}).status(302) ;
//       }

//       // check if username already exists
//         const existingUsername = await db.user.findUnique({
//             where: { username : username }, 
//         });

//         if (existingUsername) {
//             return NextResponse.json({message : 'Username already used'}).status(302) ;
//         }

//       // new user
//       const newUser = await db.user.create({
//         data: {
//           email,
//           password,
//           username,
//           role: role || 'USER',
//         },
//       }); 
//       res.status(200).json(newUser);
     
//      }catch(err){
//       console.error(err);
//       return NextResponse.error(new Error('An error occurred. Please try again.'));
//      }
//   }
}
