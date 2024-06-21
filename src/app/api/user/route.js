import User from "@/models/user";
import connectDb from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(request){
    const {name, email} = await request.json();
    await connectDb();
    await User.create({name, email});
    return NextResponse.json({message:"user registered"}, {status: 201});
}