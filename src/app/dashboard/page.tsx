// src/app/dashboard/page.tsx
"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import QuickAddNote from "@/components/dashboard/QuickAddNote";
import QuickAddFlashcard from "@/components/dashboard/QuickAddFlashcard";
import RecentNotes from "@/components/dashboard/RecentNotes";
import MobileNavigation from "@/components/dashboard/MobileNavigation";

export default function DashboardPage() {
  const { isSignedIn, user, isLoaded } = useUser();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoaded) {
      setIsLoading(false);
      if (!isSignedIn) {
        router.push("/sign-in");
      }
    }
  }, [isLoaded, isSignedIn, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 via-white to-slate-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-neutral-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isSignedIn) {
    return null; // El useEffect se encargará de redirigir
  }

  return (
    <div className="space-y-6">
      {/* Mobile Navigation */}
      <MobileNavigation />
      
      {/* Main grid */}
      <section className="grid gap-6 lg:grid-cols-2">
        <QuickAddFlashcard />
        <QuickAddNote />
      </section>
      
      {/* Recent Notes */}
      <RecentNotes />
      
    </div>
  );
}