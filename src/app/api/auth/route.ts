import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../prisma/client";
import { hash } from "bcryptjs";

interface RequestRegister extends NextApiRequest {
  email: string;
  fullName: string;
  password: string;
}

export default async function handler(
  req: RequestRegister,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email, fullName, password } = req;

    if (!email || !fullName || !password) {
      return res.status(400).json({ status: "Missing Field" });
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({ status: "User already exist" });
    }

    const hashPassword = hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        fullName,
        password: hashPassword,
      },
    });

    return res
      .status(201)
      .json({ message: "User created successfully.", user });
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
