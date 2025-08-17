// src/components/dashboard/MobileNavigation.tsx
"use client";

import Link from "next/link";
import { 
  LayoutDashboard, 
  NotebookText, 
  Layers, 
  CalendarClock, 
  Settings
} from "lucide-react";

export default function MobileNavigation() {
  return (
    <div className="md:hidden -mx-2">
      <div className="relative overflow-hidden rounded-2xl bg-white/60 p-2 ring-1 ring-black/5 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.02),0_20px_40px_-20px_rgba(2,6,23,0.12)]">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-sm bg-primary-600 text-white ring-1 ring-black/5"
          >
            <LayoutDashboard className="h-4 w-4" />
            <span>Dashboard</span>
          </Link>
          <Link
            href="/dashboard/notes"
            className="inline-flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-sm text-neutral-700 ring-1 ring-transparent hover:ring-black/5 hover:bg-neutral-100/80 transition"
          >
            <NotebookText className="h-4 w-4 text-slate-600" />
            <span>Notes</span>
          </Link>
          <Link
            href="/dashboard/decks"
            className="inline-flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-sm text-neutral-700 ring-1 ring-transparent hover:ring-black/5 hover:bg-neutral-100/80 transition"
          >
            <Layers className="h-4 w-4 text-slate-600" />
            <span>Decks</span>
          </Link>
          <Link
            href="/dashboard/reviews"
            className="inline-flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-sm text-neutral-700 ring-1 ring-transparent hover:ring-black/5 hover:bg-neutral-100/80 transition"
          >
            <CalendarClock className="h-4 w-4 text-slate-600" />
            <span>Reviews</span>
          </Link>
          <Link
            href="#"
            className="inline-flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-sm text-neutral-700 ring-1 ring-transparent hover:ring-black/5 hover:bg-neutral-100/80 transition"
          >
            <Settings className="h-4 w-4 text-slate-600" />
            <span>Settings</span>
          </Link>
        </div>
      </div>
    </div>
  );
}