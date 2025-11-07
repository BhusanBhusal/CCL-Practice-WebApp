"use client";



import Navbar from "@/components/Navbar";
import { useSearchParams } from "next/navigation";
import { vocabData } from "@/data/vocabData";
import { motion, useScroll, useSpring } from "framer-motion";
import { useState } from "react";

export default function DialoguePractice() {
  const searchParams = useSearchParams();
  const setKey = searchParams.get("set") || "carerPayment";
  const vocabSet = vocabData[setKey as keyof typeof vocabData];
  const [showNepali, setShowNepali] = useState(true);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  if (!vocabSet) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-600 via-sky-500 to-cyan-400 text-white">
        <h2 className="text-2xl">Topic not found.</h2>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-linear-to-br from-indigo-600 via-sky-500 to-cyan-400 text-white flex flex-col">
      <Navbar />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-linear-to-r from-pink-400 via-sky-400 to-cyan-400 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Header */}
      <section className="pt-28 pb-6 text-center">
        <h1 className="text-4xl font-bold mb-2">{vocabSet.title}</h1>
        <p className="text-white/80 text-lg">
          Interpret each conversation exchange between both languages.
        </p>
        <button
          onClick={() => setShowNepali(!showNepali)}
          className="mt-4 px-6 py-2 bg-white/20 border border-white/30 rounded-full hover:bg-white/30 transition"
        >
          {showNepali ? "Hide Nepali" : "Show Nepali"}
        </button>
      </section>

      {/* Dialogue Split Deck */}
      <section className="flex-1 max-w-6xl mx-auto px-6 py-10 space-y-10 relative">
        {vocabSet.words.map((word: any, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center relative"
          >
            {/* English */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-md border border-white/20 hover:scale-[1.02] transition-transform">
              <p className="text-sm font-semibold text-white/70 mb-1">
                🗣 English Speaker
              </p>
              <h3 className="text-xl font-bold text-white">{word.english}</h3>
            </div>

            {/* Divider Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/10 hidden md:block"></div>

            {/* Nepali */}
            {showNepali && (
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-md border border-white/20 hover:scale-[1.02] transition-transform">
                <p className="text-sm font-semibold text-white/70 mb-1">
                  🧏 Nepali Interpreter
                </p>
                <h3 className="text-xl font-bold text-white">{word.nepali}</h3>
              </div>
            )}
          </motion.div>
        ))}
      </section>

      {/* Footer */}
      <footer className="py-6 text-center border-t border-white/20 text-white/90 text-sm">
        © {new Date().getFullYear()} NAATI Prep | Dialogue Practice
      </footer>
    </main>
  );
}
