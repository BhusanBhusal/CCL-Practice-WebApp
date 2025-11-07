"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import { vocabData } from "@/data/vocabData";

export default function Home() {
  const vocabCount = Object.keys(vocabData).length;

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-600 via-sky-500 to-cyan-400 text-white flex flex-col">
      <Navbar />

      {/* ===== Hero Section ===== */}
      <section className="relative flex flex-col items-center justify-center text-center py-32 px-6 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-white/10 blur-[120px] opacity-20 pointer-events-none animate-pulse" />

        <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">
          🇳🇵 NAATI<span className="text-white/80">Prep</span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg opacity-90 leading-relaxed">
          Prepare for your Nepali ↔ English NAATI CCL exam with bilingual
          dialogues, smart flashcards, and interactive practice tools.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/dialogues"
            className="px-8 py-3 bg-white text-indigo-700 rounded-xl font-medium shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            🎧 Start Dialogues
          </Link>

          <Link
            href="/vocab"
            className="px-8 py-3 bg-transparent border border-white/80 rounded-xl font-medium hover:bg-white/20 hover:scale-105 transition-all duration-300"
          >
            🃏 Vocabulary Sets
          </Link>

          <Link
            href="/vocab/practice?set=hotelComplaint"
            className="px-8 py-3 bg-white/10 border border-white/20 rounded-xl font-medium hover:bg-white/20 hover:scale-105 transition-all duration-300"
          >
            🚀 Quick Practice
          </Link>
        </div>
      </section>

      {/* ===== About / Preview Section ===== */}
      <section className="bg-white text-gray-800 py-20 rounded-t-3xl shadow-inner">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose <span className="text-indigo-600">NAATI Prep?</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          <div className="p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-lg transition">
            <h3 className="font-semibold text-lg text-indigo-600 mb-2">
              🧠 Smart Vocabulary
            </h3>
            <p className="text-gray-600">
              Access {vocabCount}+ bilingual flashcards automatically grouped by
              category and topic. Learn naturally with context.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-lg transition">
            <h3 className="font-semibold text-lg text-indigo-600 mb-2">
              🎙️ Real Dialogues
            </h3>
            <p className="text-gray-600">
              Practice with realistic interpreting conversations — the same way
              it happens in the real NAATI CCL exam.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-lg transition">
            <h3 className="font-semibold text-lg text-indigo-600 mb-2">
              📈 Track Progress
            </h3>
            <p className="text-gray-600">
              Monitor your learning progress, review mistakes, and focus on your
              weaker topics with adaptive practice.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="mt-auto text-center py-6 text-sm text-white/80 border-t border-white/20">
        © {new Date().getFullYear()} NAATI Prep — Built by Bhusan Bhusal
      </footer>
    </main>
  );
}
