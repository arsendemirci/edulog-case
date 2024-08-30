"use client";

import { AuthProviderProps } from "@/types/props";
import { SessionProvider } from "next-auth/react";

export default function AuthProvider({ children }: AuthProviderProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
