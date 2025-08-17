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
    <div className="w-64 bg-white/60 backdrop-blur-xl shadow-lg flex flex-col">
      <div className="p-6">
        <h1 className="text-xl font-bold text-neutral-900">Scrittapp</h1>
      </div>
      
      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
              activeItem === item.id
                ? "bg-primary-600 text-white"
                : "text-neutral-700 hover:bg-neutral-100"
            }`}
            onClick={() => setActiveItem(item.id)}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
      
      <div className="p-4 border-t border-neutral-200">
        <div className="flex items-center gap-3 mb-4 p-3 bg-white/70 rounded-xl">
          <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center">
            <span className="text-primary-800 font-medium">
              {user?.firstName?.charAt(0) || user?.emailAddresses?.[0]?.emailAddress?.charAt(0)}
            </span>
          </div>
          <div className="min-w-0">
            <p className="text-sm font-medium text-neutral-900 truncate">
              {user?.firstName || "User"}
            </p>
            <p className="text-xs text-neutral-500 truncate">
              {user?.emailAddresses?.[0]?.emailAddress}
            </p>
          </div>
        </div>
        
        <button
          onClick={handleSignOut}
          className="flex items-center gap-3 w-full px-4 py-3 text-sm font-medium text-neutral-700 hover:bg-neutral-100 rounded-xl transition-colors"
        >
          <LogOut className="h-5 w-5" />
          <span>Sign out</span>
        </button>
      </div>
    </div>
  );
}