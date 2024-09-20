import { hash } from "bcryptjs";
import { NextResponse } from "next/server";
import prisma from "../../../../../prisma/client";

interface RequestRegister extends Request {
  email: string;
  fullName: string;
  password: string;
}

export async function POST(req: RequestRegister) {
  const { email, fullName, password } = req;

  if (!email || !fullName || !password) {
    return NextResponse.json(
      { success: false, message: "Missing Field" },
      { status: 400 }
    );
  }

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return NextResponse.json(
      { success: false, message: "User already exist" },
      { status: 400 }
    );
  }

  const hashPassword = hash(password, 10);

  const user = await prisma.user.create({
    data: {
      email,
      fullName,
      password: hashPassword,
    },
  });

  return NextResponse.json(
    {
      success: true,
      message: "User created successfully",
      data: user,
    },
    {
      status: 201,
    }
  );
}
