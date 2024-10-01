//import next request and response
import { NextResponse } from "next/server";

//import prisma client
import prisma from "../../../../../prisma/client";
import { NextApiRequest } from "next";

export async function GET(req: NextApiRequest) {
  const { categoryId } = req.query;

  //get detail post
  const trip = await prisma.trip.findUnique({
    where: {
      categoryId: categoryId,
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
      message: "Detail Data Trips",
      data: trip,
    },
    {
      status: 200,
    }
  );
}
