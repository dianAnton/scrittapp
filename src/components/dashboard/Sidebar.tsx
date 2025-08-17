// src/components/dashboard/Sidebar.tsx
"use client";

import { useUser, useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { 
  LayoutDashboard, 
  NotebookText, 
  Layers, 
  CalendarClock, 
  Search, 
  Settings,
  LogOut
} from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  const { user } = useUser();
  const { signOut } = useClerk();
  const router = useRouter();
  const [activeItem, setActiveItem] = useState("dashboard");

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
  };

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
    { id: "notes", label: "Notes", icon: NotebookText, href: "/dashboard/notes" },
    { id: "decks", label: "Decks", icon: Layers, href: "/dashboard/decks" },
    { id: "reviews", label: "Reviews", icon: CalendarClock, href: "/dashboard/reviews" },
    { id: "search", label: "Search", icon: Search, href: "/dashboard/search" },
  ];

  return (
    <aside className="hidden md:flex flex-col justify-between rounded-2xl bg-white/60 ring-1 ring-black/5 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.02),0_20px_40px_-20px_rgba(2,6,23,0.12)] p-4 sticky top-6 h-[calc(100vh-3rem)]">
      <div>
        {/* Brand */}
        <div className="mb-4">
          <span className="text-sm font-medium tracking-tight text-neutral-900 font-sans">Scrittapp</span>
        </div>
        
        {/* Navigation */}
        <nav className="space-y-1" aria-label="Sidebar">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`group flex items-center gap-3 rounded-xl px-2.5 py-2 text-sm font-medium transition-colors ${
                activeItem === item.id
                  ? "bg-primary-600 text-white ring-1 ring-black/5"
                  : "text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100/80 transition ring-1 ring-transparent hover:ring-black/5"
              }`}
              onClick={() => setActiveItem(item.id)}
            >
              <item.icon className="h-4 w-4" />
              <span>{item.label}</span>
            </Link>
          ))}
          <div className="my-3 border-t border-neutral-200/70"></div>
          <Link
            href="#"
            className="group flex items-center gap-3 rounded-xl px-2.5 py-2 text-sm text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100/80 transition ring-1 ring-transparent hover:ring-black/5"
          >
            <Settings className="h-4 w-4 text-slate-600 group-hover:text-neutral-900" />
            <span>Settings</span>
          </Link>
        </nav>
      </div>
      
      {/* Profile */}
      <div className="mt-4 space-y-2">
        <div className="flex items-center gap-3 rounded-xl bg-white/70 ring-1 ring-black/5 p-2">
          <img 
            src={user?.imageUrl || "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=96&auto=format&fit=crop"} 
            alt="User" 
            className="h-8 w-8 rounded-full object-cover ring-1 ring-black/5"
          />
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-neutral-900">
              {user?.firstName || "User"}
            </p>
            <p className="truncate text-xs text-neutral-500">
              {user?.emailAddresses?.[0]?.emailAddress || "user@example.com"}
            </p>
          </div>
        </div>
        <button
          onClick={handleSignOut}
          className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white px-3 py-2 text-sm font-medium text-neutral-900 shadow-sm ring-1 ring-black/5 transition-transform duration-200 ease-out hover:scale-[1.03] active:scale-[0.98]"
        >
          <LogOut className="h-4 w-4" />
          Sign out
        </button>
      </div>
    </aside>
  );
}