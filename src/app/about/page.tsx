"use client";

import Navbar from "@/components/Navbar";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-linear-to-br from-indigo-600 via-sky-500 to-cyan-400 text-white flex flex-col">
            <Navbar />

            {/* ===== Hero Section ===== */}
            <section className="relative py-28 text-center px-6 overflow-hidden">
                <div className="absolute inset-0 bg-white/10 blur-[120px] opacity-20 pointer-events-none" />
                <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
                    About <span className="text-white/80">NAATI Prep</span>
                </h1>
                <p className="max-w-2xl mx-auto text-lg text-white/90 leading-relaxed">
                    A free, bilingual learning platform built to support Nepali students
                    preparing for the <span className="font-semibold">NAATI CCL Test</span>.
                    Practice vocabulary and dialogues in a simple, modern, and accessible way.
                </p>
            </section>

            {/* ===== What Is Section ===== */}
            <section className="bg-white text-gray-800 py-20 px-6 md:px-12 lg:px-20 rounded-t-3xl shadow-inner">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    {/* Text */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                            What is <span className="text-indigo-600">NAATI Prep?</span>
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            NAATI Prep is a free community project designed to make
                            <strong> real NAATI CCL practice accessible to everyone</strong>.
                            It combines carefully selected vocabulary from real interpreting topics,
                            interactive dialogues, and a user-friendly design — so that students can
                            practice effectively without paying for premium courses.
                        </p>

                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start gap-3">
                                <span className="text-indigo-600 text-xl">🧠</span>
                                <span>
                                    Learn topic-wise bilingual vocabulary through interactive flashcards.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-indigo-600 text-xl">🎧</span>
                                <span>
                                    Practice interpreting real-life dialogues from community and daily
                                    situations.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-indigo-600 text-xl">💬</span>
                                <span>
                                    Build confidence in both <strong>English and Nepali </strong>
                                    with contextual examples and simple translations.
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Image */}
                    <div className="flex justify-center md:justify-end">
                        <img
                            src="/images/aboutlearn.png"
                            alt="Language learning illustration"
                            className="w-[85%] max-w-md rounded-3xl drop-shadow-2xl animate-[float_6s_ease-in-out_infinite]"
                        />
                    </div>
                </div>
            </section>

            {/* ===== Mission Section ===== */}
            <section className="bg-linear-to-br from-indigo-700 via-sky-600 to-cyan-500 text-white py-20 px-6 md:px-16 text-center">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission 🎯</h2>
                    <p className="text-lg text-white/90 leading-relaxed">
                        As a Nepali student living in Australia, I realised how hard it was to find
                        authentic NAATI CCL practice material without paying high subscription fees.
                        <br />
                        I built <span className="font-semibold">NAATI Prep</span> so that
                        <strong> every Nepali student</strong> can access high-quality,
                        realistic practice resources — completely <strong>free of cost </strong>.
                        <br />
                        This project is a contribution to the community — built by a student,
                        for students.
                    </p>
                </div>
            </section>

            {/* ===== Developer Section ===== */}
            <section className="bg-white text-gray-800 py-20 px-6 md:px-12 lg:px-20">
                <div className="max-w-5xl mx-auto text-center">
                    <img
                        src="/images/developer.png"
                        alt="Developer"
                        className="w-28 mx-auto mb-6 drop-shadow-md"
                    />
                    <h2 className="text-2xl font-bold text-indigo-700 mb-2">
                        👨‍💻 Developed by Bhusan Bhusal
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        I’m a software developer and language learner passionate about helping
                        students grow through technology.
                        NAATI Prep is my way of supporting the Nepali community with accessible,
                        practical tools for success in the NAATI CCL exam.
                    </p>
                </div>
            </section>

            {/* ===== Footer ===== */}
            <footer className="mt-auto text-center py-6 text-sm text-white/80 border-t border-white/20 bg-gradient-to-br from-indigo-600 via-sky-500 to-cyan-400">
                © {new Date().getFullYear()} NAATI Prep — Built by Bhusan Bhusal
            </footer>
        </main>
    );
}
