"use client";

import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { useSession } from "next-auth/react";
import { Avatar } from "../ui/avatar";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Header: React.FC = () => {
  const { data: user } = useSession();
  const pathname = usePathname();

  return (
    <nav className="flex w-full absolute h-16 top-0 right-0 z-20">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <Image
            src={"/Header.png"}
            alt="header"
            width={1000}
            height={200}
            className="mt-3 space-x-4"
          />
        </Link>
        {!["/register", "/login"].includes(pathname) && (
          <div className="hidden md:flex space-x-4 items-center">
            {/* <Link href={"/"} className="px-5">
              <p className="text-gray-500 hover:text-rose-500">Home</p>
            </Link>
            <Link href={"/"} className="px-5">
              <p className="text-gray-500 hover:text-rose-500">Packet</p>
            </Link> */}
            {user?.user?.email ? (
              <Link href={"/"} className="px-5 ">
                <Avatar />
              </Link>
            ) : (
              <div className="flex flex-row">
                <Link href="/login" className="mr-2">
                  <Button
                    variant="outline"
                    className="py-5 px-8 text-white hover:bg-[#e69e02] hover:text-white hover:border-[#FFAF00]"
                  >
                    Login
                  </Button>
                </Link>
                <Link href="/register">
                  <Button
                    type="submit"
                    className="py-5 px-6 border-2 border-[#FFAF00] bg-[#FFAF00] hover:bg-[#e69e02]"
                  >
                    Register
                  </Button>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
