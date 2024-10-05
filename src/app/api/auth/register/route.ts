import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import prisma from "../../../../../prisma/client";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { email, fullName, password, role } = body;

    // Check for missing fields
    if (!email || !fullName || !password || !role) {
      console.log("Missing fields:", { email, fullName, password, role });
      return NextResponse.json(
        { success: false, message: "Missing Field" },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      console.log("User already exists with email:", email);
      return NextResponse.json(
        { success: false, message: "User already exists" },
        { status: 400 }
      );
    }

    // Hash the password
    const hashPassword = await bcrypt.hash(password, 10);

    // Create the new user
    const user = await prisma.user.create({
      data: {
        email,
        fullName,
        password: hashPassword,
        role,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "User created successfully",
        data: user.email,
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { success: false, message: "Server Error", error: error.message },
        { status: 500 }
      );
    } else {
      // Handle unexpected error types
      return NextResponse.json(
        {
          success: false,
          message: "Server Error",
          error: "Unknown error occurred",
        },
        { status: 500 }
      );
    }
  }
}
