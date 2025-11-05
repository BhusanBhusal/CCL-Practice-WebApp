"use client";

import { useRouter } from "next/navigation";

export default function BackButton({ label = "Back" }: { label?: string }) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className=" flex items-center gap-2 text-white/90 hover:text-white transition mb-6"
    >
      <span className="text-lg group-hover:-translate-x-1 transition-transform">←</span>
      <span className="font-medium">{label}</span>
    </button>
  );
}
