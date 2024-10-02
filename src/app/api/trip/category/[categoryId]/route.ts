import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import prisma from "../../../../../../prisma/client";

interface Params {
  categoryId: string;
}

export async function GET(req: NextApiRequest, { params }: { params: Params }) {
  const { categoryId } = params; // Now accessing from params

  if (!categoryId) {
    return NextResponse.json(
      {
        success: false,
        message: "categoryId is missing in the request",
        data: null,
      },
      {
        status: 400, // Bad Request
      }
    );
  }

  // Fetch trip details based on categoryId
  const trip = await prisma.trip.findMany({
    where: {
      categoryTripId: parseInt(categoryId), // Ensure it's a string
    },
  });

  if (!trip) {
    return NextResponse.json(
      {
        success: true,
        message: "Detail Data Trip Not Found!",
        data: null,
      },
      {
        status: 404,
      }
    );
  }

  return NextResponse.json(
    {
      success: true,
      message: "Detail Data Trip",
      data: trip,
    },
    {
      status: 200,
    }
  );
}
