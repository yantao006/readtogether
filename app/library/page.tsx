"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

export default function LibraryPage() {
  const { isSignedIn } = useUser();
  const [activeTab, setActiveTab] = useState<"history" | "favorite">("history");

  if (!isSignedIn) {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-4">
        <p className="text-gray-500 text-center">
          Log in to enjoy more exciting content!
        </p>
        <Link
          href="/sign-in"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Log in now
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="flex border-b">
        <button
          className={`flex-1 p-2 ${
            activeTab === "history" ? "border-b-2 border-blue-500" : ""
          }`}
          onClick={() => setActiveTab("history")}
        >
          History
        </button>
        <button
          className={`flex-1 p-2 ${
            activeTab === "favorite" ? "border-b-2 border-blue-500" : ""
          }`}
          onClick={() => setActiveTab("favorite")}
        >
          Favorite
        </button>
      </div>

      {activeTab === "history" ? (
        <div className="p-4">
          <p className="text-gray-500">No reading history yet</p>
        </div>
      ) : (
        <div className="p-4">
          <p className="text-gray-500">No favorite books yet</p>
        </div>
      )}
    </div>
  );
}
