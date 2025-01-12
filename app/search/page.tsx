"use client";

import { useRouter } from "next/navigation";
import SearchBar from "@/components/SearchBar";

export default function SearchPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col h-full">
      <header className="p-4 border-b flex items-center gap-2">
        <button
          onClick={() => router.back()}
          className="p-2 hover:bg-gray-100 rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </button>
        <SearchBar />
      </header>

      <main className="flex-1 overflow-y-auto p-4">
        {/* TODO: Add search results */}
      </main>
    </div>
  );
}
