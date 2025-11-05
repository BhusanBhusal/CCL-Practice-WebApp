"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function VocabularyPage() {
  const vocabList = [
    { english: "Complaint", nepali: "गुनासो" },
    { english: "Receptionist", nepali: "अतिथि स्वागतकर्ता" },
    { english: "Payment", nepali: "भुक्तानी" },
    { english: "Reservation", nepali: "आरक्षण" },
    { english: "Calm down", nepali: "शान्त हुनु" },
    { english: "Customer", nepali: "ग्राहक" },
    { english: "Strange", nepali: "अनौठो" },
  ];

  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const current = vocabList[index];

  const nextCard = () => {
    setFlipped(false);
    setIndex((prev) => (prev + 1) % vocabList.length);
  };

  const prevCard = () => {
    setFlipped(false);
    setIndex((prev) => (prev === 0 ? vocabList.length - 1 : prev - 1));
  };

  return (
    <main className="min-h-screen bg-linear-to-br from-indigo-500 via-sky-500 to-cyan-400 text-white flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-10 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold drop-shadow-md">
          🃏 Vocabulary Practice
        </h1>
        <p className="mt-3 text-lg text-white/90">
          Flip cards to learn Nepali ↔ English translations for your NAATI exam.
        </p>
      </section>

      {/* Flashcard Section */}
      <section className="flex flex-col items-center justify-center flex-1 px-6">
        {/* Progress Bar */}
        <div className="w-full max-w-md bg-white/30 rounded-full h-2 mb-10">
          <div
            className="bg-white h-2 rounded-full transition-all duration-500"
            style={{ width: `${((index + 1) / vocabList.length) * 100}%` }}
          ></div>
        </div>

        {/* Flip Card */}
        <div
          className="relative w-80 h-52 [perspective:1000px] cursor-pointer mb-10"
          onClick={() => setFlipped(!flipped)}
        >
          <div
            className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
              flipped ? "[transform:rotateY(180deg)]" : ""
            }`}
          >
            {/* Front Side */}
            <div className="absolute w-full h-full backface-hidden bg-white/20 backdrop-blur-md border border-white/30 rounded-xl shadow-lg flex items-center justify-center">
              <span className="text-2xl font-semibold text-white text-center px-4">
                {current.english}
              </span>
            </div>

            {/* Back Side */}
            <div className="absolute w-full h-full [transform:rotateY(180deg)] backface-hidden bg-white/20 backdrop-blur-md border border-white/30 rounded-xl shadow-lg flex items-center justify-center">
              <span className="text-2xl font-semibold text-white text-center px-4">
                {current.nepali}
              </span>
            </div>
          </div>
        </div>

        {/* Control Buttons */}
        <div className="flex gap-4">
          <button
            onClick={prevCard}
            className="px-5 py-2 bg-white/20 border border-white/40 rounded-lg hover:bg-white/30 hover:scale-[1.05] transition-all duration-300"
          >
            ⬅ Previous
          </button>

          <button
            onClick={() => setFlipped(!flipped)}
            className="px-6 py-2 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-[1.05] transition-all duration-300"
          >
            🔁 Flip
          </button>

          <button
            onClick={nextCard}
            className="px-5 py-2 bg-white/20 border border-white/40 rounded-lg hover:bg-white/30 hover:scale-[1.05] transition-all duration-300"
          >
            Next ➡
          </button>
        </div>

        {/* Counter */}
        <p className="mt-6 text-white/90">
          Word {index + 1} of {vocabList.length}
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-auto text-center py-6 text-sm text-white/80 border-t border-white/20">
        © {new Date().getFullYear()} NAATI Practice App — Built by Bhusan Bhusal
      </footer>
    </main>
  );
}
