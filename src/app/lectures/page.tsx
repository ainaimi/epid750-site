// src/app/lectures/page.tsx
import React from "react";

export default function LecturesPage() {
  const lectures = [
    {
      topic: "Introduction",
      code: "#", // replace with real link
      notes: "#",
      video: "#",
    },
    {
      topic: "Datasets",
      code: "#",
      notes: "#",
      video: "#",
    },
    {
      topic: "Causal Inference",
      code: "#",
      notes: "#",
      video: "#",
    },
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
              } border-b border-dotted border-gray-1000 ${
                idx === 0 ? "border-t border-dotted border-gray-1000" : ""
              }`}
            >
              <td className="px-4 py-2 font-medium">{lec.topic}</td>
              <td className="px-4 py-2">
                <a href={lec.code} className="text-blue-600 hover:underline">
                  Code
                </a>
              </td>
              <td className="px-4 py-2">
                <a href={lec.notes} className="text-blue-600 hover:underline">
                  Notes
                </a>
              </td>
              <td className="px-4 py-2">
                <a href={lec.video} className="text-blue-600 hover:underline">
                  Video
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
