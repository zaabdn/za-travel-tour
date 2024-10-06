import { hash } from "bcrypt";
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
  try {
    const { fullName, email, password, role } = await req.json();

    if (!fullName || !email || !password || !role) {
      return NextResponse.json(
        {
          success: false,
          message: "Field is required!",
          data: null,
        },
        {
          status: 40,
        }
      );
    }

    const hashPassword = hash(password, 10);

    const userExist = await prisma.user.findOne({
      where: {
        email,
      },
    });

    if (userExist) {
      return NextResponse.json(
        {
          success: false,
          message: "Email is exist",
          data: null,
        },
        {
          status: 409,
        }
      );
    }

    const user = await prisma.user.create({
      data: {
        fullName,
        email,
        password: hashPassword,
        role,
        createdAt: new Date(),
        updatedAt: new Date(),
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
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          success: false,
          message: "Failed to create user",
          error: error.message,
        },
        {
          status: 500,
        }
      );
    }

    // Fallback in case the error is not an instance of Error
    return NextResponse.json(
      {
        success: false,
        message: "An unknown error occurred",
      },
      {
        status: 500,
      }
    );
  }
}
