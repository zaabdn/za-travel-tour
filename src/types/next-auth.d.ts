// types/next-auth.d.ts
import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: string; // Add the role property here
    };
  }
}
