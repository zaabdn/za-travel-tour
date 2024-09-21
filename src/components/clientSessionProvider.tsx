"use client";

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { Header } from "@/components";

export default function ClientSessionProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <SessionProvider>
      <Header />
      {children}
    </SessionProvider>
  );
}
