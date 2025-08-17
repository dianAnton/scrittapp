// src/components/SyncUserWithConvex.tsx
"use client";

import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";

export default function SyncUserWithConvex() {
  const { user } = useUser();
  const createUser = useMutation(api.users.create);

  if (!user) return null;

  // Crear usuario si no existe
  createUser({
    email: user.primaryEmailAddress?.emailAddress || "",
    name: user.fullName || "",
    clerkId: user.id,
  });

  return null;
}