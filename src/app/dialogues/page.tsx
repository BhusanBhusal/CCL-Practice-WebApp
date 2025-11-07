"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import { vocabData } from "@/data/vocabData";

export default function DialogueSelectorPage() {
  const topics = Object.entries(vocabData);
  console.log(topics);
  return (
    <main className="min-h-screen bg-linear-to-br from-indigo-600 via-sky-500 to-cyan-400 text-white flex flex-col">
      <Navbar />

      {/* Header Section */}
      <section className="pt-28 pb-10 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">🗣️ Dialogue Practice</h1>
        <p className="text-white/90 max-w-2xl mx-auto">
          Choose a topic to practice real-life NAATI conversation scenarios using bilingual vocabulary.
        </p>
      </section>

      {/* Grid Section */}
      <section className="flex-1 pb-20">
        <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-6">
          {topics.map(([key, set]) => (
            <Link
              key={key}
              href={`/dialogues/practice?set=${key}`}
              className="group relative p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:scale-[1.03] transition-transform duration-300"
            >
              <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {set.title}
                </h3>
                <p className="text-white/80 text-sm">
                  {set.words.length} vocabulary words
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto text-center py-6 text-sm text-white/80 border-t border-white/20">
        © {new Date().getFullYear()} NAATI Practice App — Built by Bhusan Bhusal
      </footer>
    </main>
  );
}
