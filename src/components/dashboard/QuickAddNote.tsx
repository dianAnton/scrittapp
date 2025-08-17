// src/components/dashboard/QuickAddNote.tsx
"use client";

import { useState } from "react";
import { NotebookText, Plus, Tag } from "lucide-react";

export default function QuickAddNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para guardar la nota
    console.log({ title, content, tag });
    // Resetear el formulario
    setTitle("");
    setContent("");
    setTag("");
  };

  return (
    <div className="bg-white/60 p-6 rounded-2xl ring-1 ring-black/5 backdrop-blur-xl shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <NotebookText className="h-5 w-5 text-slate-700" />
        <h3 className="text-lg font-semibold text-neutral-900">Add note</h3>
      </div>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Note title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded-xl bg-white/70 px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 ring-1 ring-neutral-200 focus:outline-none focus:ring-primary-300"
        />
        <textarea
          placeholder="Start writing your note..."
          rows={3}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full rounded-xl bg-white/70 px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 ring-1 ring-neutral-200 focus:outline-none focus:ring-primary-300"
        />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Tag className="h-4 w-4 text-slate-600" />
            <select
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              className="rounded-lg bg-white/70 px-2.5 py-1.5 text-xs text-neutral-900 ring-1 ring-neutral-200 focus:outline-none"
            >
              <option value="">Add tag</option>
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
            Save note
          </button>
        </div>
      </form>
    </div>
  );
}