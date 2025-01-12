"use client";

export default function UploadPage() {
  return (
    <div className="flex flex-col h-full p-4 space-y-8">
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Step 1: Prepare your content</h2>
        <p className="text-gray-600">
          Please follow the instructions provided in the link below to prepare
          your content.
        </p>
        <a
          href="https://readtogether.canny.io/discussion"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          https://readtogether.canny.io/discussion
        </a>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold">Step 2: Paste the link below</h2>
        <textarea
          className="w-full p-2 border rounded"
          rows={4}
          placeholder="Enter your content link here..."
        />
      </div>

      <button
        className="fixed bottom-4 left-4 right-4 p-3 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => {
          // TODO: Implement upload logic
        }}
      >
        Start uploading
      </button>
    </div>
  );
}
