
import { Suspense } from "react";
import DialoguePractice from "./DialoguePractice";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const revalidate = 0;

export default function Page() {
  return (
    <Suspense fallback={
      <div className="text-white p-10 text-center">
        Loading dialogue...
      </div>
    }>
      <DialoguePractice />
    </Suspense>
  );
}
