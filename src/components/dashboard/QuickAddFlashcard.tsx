// src/components/dashboard/QuickAddFlashcard.tsx
"use client";

import { useState } from "react";
import { Layers, Plus } from "lucide-react";

export default function QuickAddFlashcard() {
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");
  const [deck, setDeck] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para guardar la flashcard
    console.log({ front, back, deck });
    // Resetear el formulario
    setFront("");
    setBack("");
    setDeck("");
  };

  return (
    <div className="bg-white/60 p-6 rounded-2xl ring-1 ring-black/5 backdrop-blur-xl shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Layers className="h-5 w-5 text-slate-700" />
        <h3 className="text-lg font-semibold text-neutral-900">Add flashcard</h3>
      </div>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Card question (front)"
          value={front}
          onChange={(e) => setFront(e.target.value)}
          className="w-full rounded-xl bg-white/70 px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 ring-1 ring-neutral-200 focus:outline-none focus:ring-primary-300"
        />
        <textarea
          placeholder="Answer (back)"
          rows={3}
          value={back}
          onChange={(e) => setBack(e.target.value)}
          className="w-full rounded-xl bg-white/70 px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 ring-1 ring-neutral-200 focus:outline-none focus:ring-primary-300"
        />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Layers className="h-4 w-4 text-slate-600" />
            <select
              value={deck}
              onChange={(e) => setDeck(e.target.value)}
              className="rounded-lg bg-white/70 px-2.5 py-1.5 text-xs text-neutral-900 ring-1 ring-neutral-200 focus:outline-none"
            >
              <option value="">Choose deck</option>
              <option value="biology">Biology</option>
              <option value="algorithms">Algorithms</option>
              <option value="history">History</option>
            </select>
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-4 py-2 text-sm font-medium text-white ring-1 ring-black/5 hover:scale-[1.03] transition-transform"
          >
            <Plus className="h-4 w-4" />
            Add card
          </button>
        </div>
      </form>
    </div>
  );
}