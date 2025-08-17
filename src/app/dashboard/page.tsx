// src/app/dashboard/page.tsx
"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { NotebookText, Layers, CalendarClock, Plus } from "lucide-react";
import QuickAddNote from "@/components/dashboard/QuickAddNote";
import QuickAddFlashcard from "@/components/dashboard/QuickAddFlashcard";
import RecentNotes from "@/components/dashboard/RecentNotes";

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
      <div className="grid gap-6 lg:grid-cols-2">
        <QuickAddNote />
        <QuickAddFlashcard />
      </div>
      
      <RecentNotes />
      
      <div className="bg-white/60 p-6 rounded-2xl ring-1 ring-black/5 backdrop-blur-xl shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-neutral-900">Getting Started</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/70 p-4 rounded-xl">
            <NotebookText className="h-8 w-8 text-primary-600 mb-2" />
            <h3 className="font-medium text-neutral-900 mb-1">Create Notes</h3>
            <p className="text-sm text-neutral-600">Capture your knowledge in structured notes.</p>
          </div>
          <div className="bg-white/70 p-4 rounded-xl">
            <Layers className="h-8 w-8 text-primary-600 mb-2" />
            <h3 className="font-medium text-neutral-900 mb-1">Make Flashcards</h3>
            <p className="text-sm text-neutral-600">Convert notes into flashcards for review.</p>
          </div>
          <div className="bg-white/70 p-4 rounded-xl">
            <CalendarClock className="h-8 w-8 text-primary-600 mb-2" />
            <h3 className="font-medium text-neutral-900 mb-1">Review Regularly</h3>
            <p className="text-sm text-neutral-600">Use spaced repetition to remember longer.</p>
          </div>
        </div>
      </div>
    </div>
  );
}