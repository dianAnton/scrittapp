// src/components/AuthRedirect.tsx
"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthRedirect() {
  const { isSignedIn, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.push("/dashboard");
    }
  }, [isLoaded, isSignedIn, router]);

  return null;
}