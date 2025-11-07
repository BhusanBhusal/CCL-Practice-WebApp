"use client";

import { Suspense } from "react";
import DialoguePracticePage from "./DialoguePractice";

export default function Page() {
  return (
    <Suspense fallback={<div className="text-white p-10 text-center">Loading...</div>}>
      <DialoguePracticePage />
    </Suspense>
  );
}
