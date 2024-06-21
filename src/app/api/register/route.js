import bcrypt from "bcryptjs"
import { NextResponse } from "next/server"
import connectDb from "@/utils/db";
import User from "@/models/user";


export const POST = async (request) => {
  const { fullName, email, password,} = await request.json();

  // Connect to the database
  await connectDb();

  // Check if the user already exists
  const user = await User.findOne({ email: email });
  if (user) {
    return new NextResponse("User already exists", { status: 400 });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new user
  const newUser = new User({
    fullName: fullName,
    email: email,
    password: hashedPassword,
  });

  try {
    // Save the new user
    await newUser.save();
    return new NextResponse("User is registered", { status: 200 })
  } catch (error) {
    // Return an error message if the user could not be saved
    return new NextResponse("Error registering user", { status: 500 });
  }
}

// export async function POST(request){
//   const { fullName, email, password, confirmPassword } = await request.json();
//   try {
//     const hashPassword = bcrypt.hash(password, confirmPassword, 10);
//     await connectDb();
//     await User.create({ fullName, email, password: hashPassword, confirmPassword: hashPassword });

//     return NextResponse.json({ message: "user registered" }, { status: 201 });

//   } catch (error) {
//     return NextResponse.json({ message: "registration error" }, { status: 500 });

//   }


// }

