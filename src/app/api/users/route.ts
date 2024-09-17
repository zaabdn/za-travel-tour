import { NextResponse } from "next/server";
import prisma from "../../../../prisma/client";

export async function GET() {
  const users = await prisma.user.findMany();

  return NextResponse.json(
    {
      success: true,
      message: "List users",
      data: users,
    },
    {
      status: 200,
    }
  );
}

export async function POST(req: Request) {
  const { fullName, email, password } = await req.json();

  const user = await prisma.user.create({
    data: {
      fullName,
      email,
      password,
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
