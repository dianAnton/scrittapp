// src/components/dashboard/Header.tsx
"use client";

import { useUser } from "@clerk/nextjs";
import { Search } from "lucide-react";

export default function Header() {
  const { user } = useUser();

  return (
    <header className="relative overflow-hidden rounded-3xl bg-white/60 p-4 sm:p-6 ring-1 ring-black/5 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.02),0_30px_60px_-15px_rgba(2,6,23,0.12)]">
      {/* Fondo naranja suave */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-16 -left-12 h-40 w-40 rounded-full bg-orange-300/20 blur-3xl"></div>
        <div className="absolute -bottom-20 -right-10 h-56 w-56 rounded-full bg-orange-200/20 blur-3xl"></div>
      </div>
      
      <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl md:text-4xl tracking-tight text-neutral-900 font-semibold">
            Welcome back, {user?.firstName}
          </h1>
          <p className="mt-1 text-sm text-neutral-600">Let's keep building your knowledge.</p>
        </div>
        
        <div className="flex w-full flex-col items-stretch gap-2 sm:w-auto sm:flex-row">
          <div className="flex items-center rounded-xl bg-white/80 ring-1 ring-black/5 px-3 py-2">
            <Search className="h-4 w-4 text-slate-500" />
            <input 
              type="text" 
              placeholder="Search notes, decks, cards…" 
              className="ml-2 w-full bg-transparent text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none"
            />
          </div>
        </div>
      </div>
    </header>
  );
}