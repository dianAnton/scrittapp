// src/components/dashboard/RecentNotes.tsx
"use client";

import { Notebook } from "lucide-react";

export default function RecentNotes() {
  // Estos datos vendrían de la base de datos, pero por ahora usamos datos de ejemplo
  const recentNotes = [
    {
      id: 1,
      title: "Mitosis vs Meiosis",
      preview: "Key differences in chromosome behavior, crossing over, and resulting daughter cells.",
      date: "2d ago",
      tag: "Biology",
      cardCount: 3,
    },
    {
      id: 2,
      title: "Quick Sort Intuition",
      preview: "Partitioning strategy, pivot selection, and average vs worst-case complexity.",
      date: "5d ago",
      tag: "Algorithms",
      cardCount: 6,
    },
    {
      id: 3,
      title: "Medici Family Overview",
      preview: "Patronage, political influence in Florence, and contributions to the Renaissance.",
      date: "1w ago",
      tag: "History",
      cardCount: 4,
    },
  ];

  return (
    <section className="rounded-2xl bg-white/60 p-4 sm:p-5 ring-1 ring-black/5 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.02),0_30px_60px_-15px_rgba(2,6,23,0.12)]">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Notebook className="h-5 w-5 text-slate-700" />
          <h3 className="text-lg md:text-xl font-semibold text-neutral-900">Recent notes</h3>
        </div>
        <a href="#" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
          View all
        </a>
      </div>
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {recentNotes.map((note) => (
          <article
            key={note.id}
            className="group rounded-xl bg-white/70 p-4 ring-1 ring-neutral-200 hover:ring-neutral-300 transition cursor-pointer"
          >
            <div className="mb-2 flex items-center justify-between">
              <p className="truncate text-sm font-medium text-neutral-900">{note.title}</p>
              <span className="text-xs text-neutral-500">{note.date}</span>
            </div>
            <p className="line-clamp-2 text-sm text-neutral-600">{note.preview}</p>
            <div className="mt-3 flex items-center gap-2">
              <span className="inline-flex items-center rounded-md bg-neutral-100 px-2 py-1 text-[11px] text-neutral-700 ring-1 ring-neutral-200">
                {note.tag}
              </span>
              <span className="inline-flex items-center rounded-md bg-neutral-100 px-2 py-1 text-[11px] text-neutral-700 ring-1 ring-neutral-200">
                {note.cardCount} cards
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}