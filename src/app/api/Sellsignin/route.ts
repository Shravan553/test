import { NextResponse } from "next/server";
import User from "../../models/Selluser";
import connectToDatabase from "../../lib/mongodb";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  if (!email || !password) {
    return NextResponse.json({ message: "All fields are required" }, { status: 400 });
  }

  try {
    await connectToDatabase();

   
   
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return NextResponse.json({ message: "Invalid email or password" }, { status: 400 });
    }
    
    return NextResponse.json({ message: "Login successful!" }, { status: 200 });
  } catch (error) {
    console.error("Error during sign-in:", error);
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}
