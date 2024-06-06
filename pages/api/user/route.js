// available at /api/user/route

import { db } from "@/lib/db";
import { NextResponse } from "next/server";
// const { hash } = require('bcryptjs')

export const config = {
  runtime: 'edge',
};

export default async function POST(request) {
 try{
  const body = await request.json();
  const { email, password, username, role } = body;
  
  // // check if email already exists
  // const existingUser = await db.user.findUnique({
  //   where: { email : email }, 
  // });
 
  // if (existingUser) {
  //   return NextResponse.redirect('/login').status(302) ;
  // }

  // new user
  // const hashedPassword = await hash(password, 10);
  const newUser = await db.user.create({
    data: {
      email,
      password,
      username,
      role: role || 'USER',
    },
  }); 
  return NextResponse.json(body, newUser);

 }catch(err){
  console.error(err);
  return NextResponse.error(new Error('An error occurred. Please try again.'));
 }
}


