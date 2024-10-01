import { NextResponse } from "next/server";
import prisma from "../../../../prisma/client";

export async function GET() {
  const categories = await prisma.categoryTrip.findMany();

  return NextResponse.json(
    {
      success: true,
      message: "List categories",
      data: categories,
    },
    {
      status: 200,
    }
  );
}

export async function POST(req: Request) {
  const { name } = await req.json();

  const category = await prisma.categoryTrip.create({
    data: {
      name,
    },
  });

  return NextResponse.json(
    {
      success: true,
      message: "Category created successfully",
      data: category,
    },
    {
      status: 201,
    }
  );
}
