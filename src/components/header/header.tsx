"use client";

import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <nav className="flex w-full absolute h-16 top-0 right-0">
      <div className="container mx-auto flex justify-between items-center">
        <div>Logo</div>
        <div className="hidden md:flex space-x-4">
          <Link href={"/"} className="px-5">
            <p className="text-gray-500 hover:text-rose-500">Home</p>
          </Link>
          <Link href={"/"} className="px-5">
            <p className="text-gray-500 hover:text-rose-500">Home</p>
          </Link>
          <Link href={"/"} className="px-5">
            <p className="text-gray-500 hover:text-rose-500">Home</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
