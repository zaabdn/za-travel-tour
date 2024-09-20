"use client";

import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { useSession } from "next-auth/react";
import { Avatar } from "../ui/avatar";

const Header: React.FC = () => {
  const { data: user } = useSession();

  return (
    <nav className="flex w-full absolute h-16 top-0 right-0">
      <div className="container mx-auto flex justify-between items-center">
        <div>Logo</div>
        <div className="hidden md:flex space-x-4 items-center">
          <Link href={"/"} className="px-5">
            <p className="text-gray-500 hover:text-rose-500">Home</p>
          </Link>
          <Link href={"/"} className="px-5">
            <p className="text-gray-500 hover:text-rose-500">Packet</p>
          </Link>
          {user?.user?.email ? (
            <Link href={"/"} className="px-5 ">
              <Avatar />
            </Link>
          ) : (
            <div className="flex flex-row">
              <Link href="/login" className="mr-2">
                <Button variant="outline" className="shadow-none">
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button className="shadow-none">Register</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
