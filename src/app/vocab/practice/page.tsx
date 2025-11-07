export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const revalidate = 0;

import { Suspense } from "react";
import VocabPractice from "./VocabPractice";

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="text-white p-10 text-center">
          Loading vocabulary...
        </div>
      }
    >
      <VocabPractice />
    </Suspense>
  );
}
