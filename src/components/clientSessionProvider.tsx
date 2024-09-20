// components/ClientSessionProvider.tsx (Client Component)
"use client"; // This file is client-side only

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { Header } from "@/components"; // Example usage of other client-side components

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
