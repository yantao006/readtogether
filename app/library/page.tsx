"use client";

import { useState } from "react";

export default function LibraryPage() {
  const [activeTab, setActiveTab] = useState<"history" | "favorite">("history");

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
