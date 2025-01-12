"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

export default function SearchBar() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const menu = document.getElementById("add-menu");
    menu?.classList.add("hidden");
  }, [pathname]);

  const handleFocus = () => {
    router.push("/search");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const query = e.currentTarget.value.trim();
      if (query) {
        // TODO: Implement search functionality
        console.log("Searching for:", query);
      }
    }
  };

  const handleAddClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const menu = document.getElementById("add-menu");
    menu?.classList.toggle("hidden");
  };

  return (
    <div className="relative w-full flex items-center gap-2">
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Search by title, author or ISBN"
          className="w-full pl-10 pr-4 py-2 border rounded-xl"
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>

      {pathname !== "/search" && (
        <div className="relative">
          <button
            className="p-2 bg-white rounded-lg shadow-sm hover:bg-gray-50"
            onClick={handleAddClick}
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
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
          <div
            id="add-menu"
            className="hidden absolute right-0 mt-2 w-fit bg-white border rounded shadow-lg"
          >
            <button
              onClick={() => {
                const menu = document.getElementById("add-menu");
                menu?.classList.add("hidden");
                router.push("/upload");
              }}
              className="w-full px-4 py-2 text-left bg-white hover:bg-gray-50"
            >
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"
                  />
                </svg>
                <span>Upload</span>
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
