// src/app/lectures/page.tsx
import React from "react";
import { CommandLineIcon, BookOpenIcon, VideoCameraIcon } from "@heroicons/react/24/outline";

export default function LecturesPage() {
  const lectures = [
    { 
      topic: "Introduction", 
      description: "Introduction to the course, including topics, coding conventions, and structure", 
      code: "#", notes: "#", video: "#" 
    },
    { 
      topic: "Datasets", 
      description: "A randomized trial, observational study, and longitudinal study", 
      code: "#", notes: "#", video: "#" 
    },
    { 
      topic: "Causal Inference", 
      description: "Foundations of causal inference and parametric estimation", 
      code: "#", notes: "#", video: "#" 
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
              } border-b border-dotted border-gray-950 ${
                idx === 0 ? "border-t border-dotted border-gray-950" : ""
              }`}
            >
              {/* Topic with subtitle */}
              <td className="px-4 py-2">
                <div className="font-medium">{lec.topic}</div>
                <div className="text-sm text-gray-600">{lec.description}</div>
              </td>

              {/* Icons (right) */}
              <td className="px-4 py-2 text-right">
                <div className="flex justify-end gap-6">
                  <a
                    href={lec.code}
                    className="text-blue-600 hover:text-blue-800"
                    title="Code"
                  >
                    <CommandLineIcon className="h-8 w-8" />
                  </a>
                  <a
                    href={lec.notes}
                    className="text-blue-600 hover:text-blue-800"
                    title="Notes"
                  >
                    <BookOpenIcon className="h-8 w-8" />
                  </a>
                  <a
                    href={lec.video}
                    className="text-blue-600 hover:text-blue-800"
                    title="Video"
                  >
                    <VideoCameraIcon className="h-8 w-8" />
                  </a>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
