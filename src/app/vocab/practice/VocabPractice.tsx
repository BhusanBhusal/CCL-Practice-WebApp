"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import { vocabData } from "@/data/vocabData";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function VocabPracticePage() {
  const searchParams = useSearchParams();
  const setKey = searchParams.get("set") || "carerPayment";
  const vocabSet = vocabData[setKey as keyof typeof vocabData];

  const [index, setIndex] = useState(0);
  const [showNepali, setShowNepali] = useState(false);

  if (!vocabSet) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-600 via-sky-500 to-cyan-400 text-white">
        <h2 className="text-2xl">Topic not found.</h2>
      </main>
    );
  }

  const words = vocabSet.words;
  const word = words[index];

  const handleNext = () => {
    setShowNepali(false);
    setIndex((prev) => (prev + 1) % words.length);
  };

  const handlePrev = () => {
    setShowNepali(false);
    setIndex((prev) => (prev - 1 + words.length) % words.length);
  };

  const handleShuffle = () => {
    setShowNepali(false);
    setIndex(Math.floor(Math.random() * words.length));
  };

  return (
    <main className="min-h-screen flex flex-col bg-linear-to-br from-[#1e3a8a] via-[#2563eb] to-[#38bdf8] text-white">
  <Navbar />

  {/* Header */}
  <header className="pt-24 text-center space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3">
          <span className="text-4xl">🧾</span>
          {vocabSet.title}
        </h1>
        <p className="text-white/80 text-lg">
          Test your bilingual vocabulary knowledge interactively.
        </p>

        {/* Back Button */}
        <Link
          href="/vocab"
          className="inline-block mt-4 px-5 py-2 bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition text-sm"
        >
          ← Back to Sets
        </Link>
      </header>

  {/* Flashcard Container */}
  <section className="flex-1 flex flex-col items-center justify-center">
    <div className="relative w-full max-w-lg">
      <AnimatePresence mode="wait">
        <motion.div
          key={index + (showNepali ? "-flip" : "")}
          initial={{ opacity: 0, rotateY: 180 }}
          animate={{ opacity: 1, rotateY: 0 }}
          exit={{ opacity: 0, rotateY: -180 }}
          transition={{ duration: 0.09 }}
          onClick={() => setShowNepali(!showNepali)}
          className="cursor-pointer text-center p-10 rounded-3xl bg-white/10 backdrop-blur-xl shadow-2xl border border-white/20 hover:bg-white/20 transition-all"
        >
          <h3 className="text-lg font-semibold mb-3 tracking-wide text-white/80">
            {showNepali ? "नेपाली" : "English"}
          </h3>
          <p className="text-4xl md:text-5xl font-bold text-white drop-shadow-sm leading-snug">
            {showNepali ? word.nepali : word.english}
          </p>
          <p className="text-sm text-white/60 mt-3">(Tap to flip)</p>
        </motion.div>
      </AnimatePresence>
    </div>

    {/* Controls */}
    <div className="mt-10 flex gap-5 flex-wrap justify-center">
      <button
        onClick={handlePrev}
        className="px-6 py-2 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 transition"
      >
        ⬅ Prev
      </button>
      <button
        onClick={handleShuffle}
        className="px-6 py-2 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 transition"
      >
        🔀 Shuffle
      </button>
      <button
        onClick={handleNext}
        className="px-6 py-2 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 transition"
      >
        Next ➡
      </button>
    </div>

    {/* Progress */}
    <div className="mt-6 text-sm text-white/80">
      {index + 1} / {words.length} words
    </div>
  </section>

  {/* Footer */}
  <footer className="py-6 text-center text-sm text-white/70 border-t border-white/10">
     © {new Date().getFullYear()} NAATI Prep | Dialogue Practice
  </footer>
</main>

  );
}
