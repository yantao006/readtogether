"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import SearchBar from "@/components/SearchBar";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const showSearchBar = pathname !== "/me" && pathname !== "/search";

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className="flex justify-center">
            <div className="flex flex-col h-screen w-full max-w-[1400px]">
              <header className="p-4 border-b">
                {showSearchBar && <SearchBar />}
              </header>

              <main className="flex-1 overflow-y-auto p-4">{children}</main>

              <Navigation />
            </div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
