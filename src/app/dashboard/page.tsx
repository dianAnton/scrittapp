// src/app/dashboard/page.tsx
import { currentUser } from "@clerk/nextjs/server";
import Link from 'next/link';
import { NotebookText, Layers, CalendarClock, Search } from 'lucide-react';

export default async function DashboardPage() {
  const user = await currentUser();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-neutral-900">Welcome back, {user?.firstName}</h1>
          <p className="text-neutral-600 mt-2">Let's continue building your knowledge.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Quick Add Card */}
          <div className="bg-white/60 p-6 rounded-2xl ring-1 ring-black/5 backdrop-blur-xl shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <NotebookText className="h-5 w-5 text-slate-700" />
              <h3 className="text-lg font-semibold text-neutral-900">Add note</h3>
            </div>
            <div className="space-y-3">
              <input 
                type="text" 
                placeholder="Note title" 
                className="w-full rounded-xl bg-white/70 px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 ring-1 ring-neutral-200 focus:outline-none focus:ring-primary-300"
              />
              <textarea 
                placeholder="Start writing your note..." 
                rows={3}
                className="w-full rounded-xl bg-white/70 px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 ring-1 ring-neutral-200 focus:outline-none focus:ring-primary-300"
              />
              <div className="flex justify-end">
                <button className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-4 py-2 text-sm font-medium text-white ring-1 ring-black/5 hover:scale-[1.03] transition-transform">
                  Save note
                </button>
              </div>
            </div>
          </div>

          {/* Quick Add Flashcard */}
          <div className="bg-white/60 p-6 rounded-2xl ring-1 ring-black/5 backdrop-blur-xl shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Layers className="h-5 w-5 text-slate-700" />
              <h3 className="text-lg font-semibold text-neutral-900">Add flashcard</h3>
            </div>
            <div className="space-y-3">
              <input 
                type="text" 
                placeholder="Card question (front)" 
                className="w-full rounded-xl bg-white/70 px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 ring-1 ring-neutral-200 focus:outline-none focus:ring-primary-300"
              />
              <textarea 
                placeholder="Answer (back)" 
                rows={3}
                className="w-full rounded-xl bg-white/70 px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 ring-1 ring-neutral-200 focus:outline-none focus:ring-primary-300"
              />
              <div className="flex justify-between items-center">
                <select className="rounded-lg bg-white/70 px-2.5 py-1.5 text-xs text-neutral-900 ring-1 ring-neutral-200 focus:outline-none">
                  <option>Choose deck</option>
                  <option>Biology</option>
                  <option>Algorithms</option>
                  <option>History</option>
                </select>
                <button className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-4 py-2 text-sm font-medium text-white ring-1 ring-black/5 hover:scale-[1.03] transition-transform">
                  Add card
                </button>
              </div>
            </div>
          </div>
        </div>

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
    </div>
  )
}