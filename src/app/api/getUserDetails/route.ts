import { NextResponse } from "next/server";
import User1 from "../../models/UserDetails";
import connectToDatabase from "../../lib/mongodb";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");

  if (!email) {
    return NextResponse.json({ message: "Email is required" }, { status: 400 });
  }

  try {
    await connectToDatabase();
    const user = await User1.findOne({ email });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error("Error fetching user details:", error);
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}
