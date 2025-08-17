// src/components/dashboard/Header.tsx
"use client";

import { useUser } from "@clerk/nextjs";
import { Search } from "lucide-react";

export default function Header() {
  const { user } = useUser();

  return (
    <header className="bg-white/60 backdrop-blur-xl shadow-sm p-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-neutral-900">
            Welcome back, {user?.firstName}
          </h1>
          <p className="text-neutral-600 mt-1">Let's continue building your knowledge.</p>
        </div>
        
        <div className="flex items-center rounded-xl bg-white/80 ring-1 ring-black/5 px-3 py-2 w-full max-w-md">
          <Search className="h-4 w-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search notes, decks, cards…"
            className="ml-2 w-full bg-transparent text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none"
          />
        </div>
      </div>
    </header>
  );
}