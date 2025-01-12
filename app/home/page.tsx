"use client";

import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Book {
  id: string;
  title: string;
  author: string;
}

export default function HomePage() {
  const { isSignedIn } = useUser();
  const router = useRouter();
  const books: Book[] = []; // TODO: 从API获取书籍数据

  if (!isSignedIn) {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-4">
        <p className="text-gray-600">Log in to enjoy more exciting content!</p>
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
      {books.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-gray-500">请根据指南上传书籍</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {books.map((book) => (
            <div key={book.id} className="border p-4 rounded">
              <h3 className="font-bold">{book.title}</h3>
              <p className="text-sm text-gray-500">{book.author}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
