import { NextResponse } from "next/server";
import prisma from "../../../../prisma/client";

export async function GET() {
  const users = await prisma.trip.findMany();

  return NextResponse.json(
    {
      success: true,
      message: "List trips",
      data: users,
    },
    {
      status: 200,
    }
  );
}

export async function POST(req: Request) {
  const { fullName, email, password } = await req.json();

  const trip = await prisma.trips.create({
    data: {
      fullName,
      email,
      password,
    },
  });

  return NextResponse.json(
    {
      success: true,
      message: "Trip created successfully",
      data: trip,
    },
    {
      status: 201,
    }
  );
}
