// convex/schema.ts
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    email: v.string(),
    name: v.optional(v.string()),
    clerkId: v.string(),
  })
    .index("by_clerk_id", ["clerkId"]), // Agregar esta línea
  notes: defineTable({
    title: v.string(),
    content: v.string(),
    userId: v.id("users"),
    createdAt: v.number(),
    updatedAt: v.number(),
    tags: v.optional(v.array(v.string())),
  }),
  decks: defineTable({
    name: v.string(),
    userId: v.id("users"),
    createdAt: v.number(),
  }),
  flashcards: defineTable({
    front: v.string(),
    back: v.string(),
    deckId: v.id("decks"),
    noteId: v.optional(v.id("notes")),
    createdAt: v.number(),
    nextReview: v.number(),
    interval: v.number(),
    easeFactor: v.number(),
    repetitions: v.number(),
  }),
});