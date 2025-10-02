// src/app/lectures/page.tsx
import React from "react";
import { CommandLineIcon, BookOpenIcon, VideoCameraIcon } from "@heroicons/react/24/outline";

export default function LecturesPage() {
  const lectures = [
    { topic: "Introduction", code: "#", notes: "#", video: "#" },
    { topic: "Datasets", code: "#", notes: "#", video: "#" },
    { topic: "Causal Inference", code: "#", notes: "#", video: "#" },
  ];

  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Lectures</h1>
      <table className="w-full border-collapse">
        <tbody>
          {lectures.map((lec, idx) => (
            <tr
              key={lec.topic}
              className={`${
                idx % 2 === 0 ? "bg-gray-50" : "bg-white"
              } border-b border-dotted border-gray-950 ${
                idx === 0 ? "border-t border-dotted border-gray-950" : ""
              }`}
            >
              {/* Topic */}
              <td className="px-4 py-2 font-medium">{lec.topic}</td>

              {/* Code link with CommandLineIcon */}
              <td className="px-4 py-2 text-center">
                <a
                  href={lec.code}
                  className="text-blue-600 hover:text-blue-800"
                  title="Code"
                >
                  <CommandLineIcon className="h-5 w-5 inline" />
                </a>
              </td>

              {/* Notes link with Book icon */}
              <td className="px-4 py-2 text-center">
                <a
                  href={lec.notes}
                  className="text-blue-600 hover:text-blue-800"
                  title="Notes"
                >
                  <BookOpenIcon className="h-5 w-5 inline" />
                </a>
              </td>

              {/* Video link with Camera icon */}
              <td className="px-4 py-2 text-center">
                <a
                  href={lec.video}
                  className="text-blue-600 hover:text-blue-800"
                  title="Video"
                >
                  <VideoCameraIcon className="h-5 w-5 inline" />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
