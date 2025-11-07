"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { vocabData } from "@/data/vocabData";
import { Menu, X } from "lucide-react"; // ✅ for toggle icons

// 🧠 Keyword-based auto categorizer
function getCategoryFromTitle(title: string) {
    const lower = title.toLowerCase();

    const categories: Record<string, string[]> = {
        "Health & Medical": [
            "fracture", "injury", "hospital", "doctor", "pain", "illness",
            "therapy", "disease", "check-up", "urination", "diabetes", "smoking",
            "obesity", "bowel", "cancer", "depression", "disorder"
        ],
        "Legal & Law": [
            "court", "police", "compensation", "custody", "burglary",
            "crime", "property", "law", "solicitor", "privacy", "will"
        ],
        "Finance & Work": [
            "payment", "exchange", "working", "job", "wage",
            "benefit", "salary", "bank", "finance", "business"
        ],
        "Education": [
            "teacher", "student", "school", "class", "education", "interview", "vocational"
        ],
        "Social & Family": [
            "parent", "family", "child", "social", "community", "immigration", "new life"
        ],
        "Travel & Lifestyle": [
            "car", "hotel", "travel", "whale", "airport", "foreign", "trip"
        ],
    };

    for (const [category, keywords] of Object.entries(categories)) {
        if (keywords.some((word) => lower.includes(word))) return category;
    }
    return "Other Topics";
}

// 🧩 Group by category
function autoGroupVocab(data: any) {
    const grouped: Record<string, any[]> = {};
    Object.entries(data).forEach(([key, value]: [string, any]) => {
        const category = getCategoryFromTitle(value.title);
        if (!grouped[category]) grouped[category] = [];
        grouped[category].push({ key, ...value });
    });
    return grouped;
}

export default function VocabSelectorPage() {
    const [search, setSearch] = useState("");
    const groupedVocab = autoGroupVocab(vocabData);
    const categories = Object.keys(groupedVocab);
    const [activeCategory, setActiveCategory] = useState(categories[0]);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

    // 🔍 Scroll Spy
    useEffect(() => {
        const handleScroll = () => {
            let current = activeCategory;
            for (const cat of categories) {
                const el = sectionRefs.current[cat];
                if (el && el.getBoundingClientRect().top < window.innerHeight / 3) {
                    current = cat;
                }
            }
            setActiveCategory(current);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [categories]);

    // 🎯 Scroll to category
    const scrollToCategory = (cat: string) => {
        const el = sectionRefs.current[cat];
        if (el) {
            window.scrollTo({ top: el.offsetTop - 100, behavior: "smooth" });
            setSidebarOpen(false);
        }
    };

    return (
        <main className="min-h-screen bg-gradient-to-br from-indigo-600 via-sky-500 to-cyan-400 text-white flex flex-col">
            <Navbar />

            {/* ======= Main Layout ======= */}
            <div className="flex flex-1 pt-24">
                {/* ======= Sidebar (Desktop) ======= */}
                <aside className="hidden md:flex flex-col w-64 px-4 py-8 border-r border-white/20 backdrop-blur-md sticky top-0 h-screen">
                    <h2 className="text-xl font-semibold mb-6 text-white/90">
                        📂 Categories
                    </h2>
                    <div className="flex flex-col gap-2 overflow-y-auto">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => scrollToCategory(cat)}
                                className={`text-left px-4 py-2 rounded-lg transition-colors ${activeCategory === cat
                                        ? "bg-white/30 text-white font-semibold"
                                        : "hover:bg-white/10 text-white/80"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </aside>

                {/* ======= Mobile Sidebar (Drawer) ======= */}
                <div
                    className={`fixed inset-y-0 left-0 z-40 w-64 bg-white/20 backdrop-blur-md p-6 border-r border-white/30 transform transition-transform duration-300 md:hidden ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
                        }`}
                >
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-semibold text-white/90">📂 Categories</h2>
                        <button onClick={() => setSidebarOpen(false)}>
                            <X className="w-6 h-6 text-white" />
                        </button>
                    </div>

                    <div className="flex flex-col gap-2 overflow-y-auto">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => scrollToCategory(cat)}
                                className={`text-left px-4 py-2 rounded-lg transition-colors ${activeCategory === cat
                                        ? "bg-white/30 text-white font-semibold"
                                        : "hover:bg-white/10 text-white/80"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* ======= Mobile Menu Button ======= */}
                <button
                    onClick={() => setSidebarOpen(true)}
                    className="fixed top-24 left-4 z-30 md:hidden bg-white/20 backdrop-blur-lg p-2 rounded-lg border border-white/30 hover:bg-white/30 transition-all"
                >
                    <Menu className="w-6 h-6 text-white" />
                </button>

                {/* ======= Main Content ======= */}
                <div className="flex-1 px-4 md:px-10 py-8 overflow-hidden">
                    {/* Header */}
                    <section className="text-center mb-10">
                        <h1 className="text-4xl md:text-5xl font-bold mb-3 drop-shadow-md">
                            🧠 Vocabulary Sets
                        </h1>
                        <p className="text-lg text-white/90 max-w-2xl mx-auto">
                            Explore bilingual flashcards automatically grouped by topic.
                        </p>

                        {/* Search */}
                        <div className="mt-8 flex justify-center">
                            <input
                                type="text"
                                placeholder="🔍 Search topics..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full max-w-md px-5 py-3 rounded-full border border-white/30 bg-white/20 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/40 backdrop-blur-md"
                            />
                        </div>
                    </section>

                    {/* Sections */}
                    <section className="space-y-16">
                        {categories.map((category) => {
                            const sets = groupedVocab[category];
                            const filtered = sets.filter((set) =>
                                set.title.toLowerCase().includes(search.toLowerCase())
                            );
                            if (filtered.length === 0) return null;

                            return (
                                <div
                                    key={category}
                                    ref={(el) => {
                                        sectionRefs.current[category] = el;
                                    }}
                                >
                                    <h2 className="text-3xl font-semibold mb-6 border-l-4 border-white/50 pl-3 drop-shadow-sm">
                                        {category}
                                    </h2>
                                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                        {filtered.map((set) => (
                                            <Link
                                                key={set.key}
                                                href={`/vocab/practice?set=${set.key}`}
                                                className="group relative p-6 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-lg border border-white/20 shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-300"
                                            >
                                                <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300"></div>
                                                <div className="relative z-10 flex flex-col gap-3">
                                                    <h3 className="text-xl font-semibold">{set.title}</h3>
                                                    <p className="text-white/80 text-sm">
                                                        {set.words.length} vocabulary words
                                                    </p>
                                                    <span className="text-xs px-2 py-1 bg-white/20 rounded-full w-fit">
                                                        Practice →
                                                    </span>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </section>

                    {/* Footer */}
                    <footer className="mt-16 text-center py-6 text-sm text-white/80 border-t border-white/20">
                        © {new Date().getFullYear()} NAATI Prep — Built by Bhusan Bhusal
                    </footer>
                </div>
            </div>
        </main>
    );
}
