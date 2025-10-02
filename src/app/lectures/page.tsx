// src/app/lectures/page.tsx
import React from "react";
import { CommandLineIcon, BookOpenIcon, VideoCameraIcon } from "@heroicons/react/24/outline";

export default function LecturesPage() {
  const lectures = [
    { 
      topic: "Introduction", 
      description: "Overview of causal inference and machine learning", 
      code: "#", notes: "#", video: "#" 
    },
    { 
      topic: "Datasets", 
      description: "Working with real-world causal inference datasets", 
      code: "#", notes: "#", video: "#" 
    },
    { 
      topic: "Causal Inference", 
      description: "Foundations of estimating causal effects", 
      code: "#", notes: "#", video: "#" 
    },
  ];

  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Lectures</h1>

      {/* Intro section */}
      <div className="mb-8 text-gray-700 space-y-4">
        <p>
          This page contains all course lectures organized by topic. Each row corresponds
          to a lecture, with a short description of its contents. The resources for each
          lecture are available through the icons on the right.
        </p>

        {/* Icon-only list */}
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <CommandLineIcon className="h-6 w-6 text-blue-600" />
            <span>
              Provides example R or Python scripts used in the lecture.
            </span>
          </li>
          <li className="flex items-center gap-2">
            <BookOpenIcon className="h-6 w-6 text-blue-600" />
            <span>
              Contains lecture slides or written material.
            </span>
          </li>
          <li className="flex items-center gap-2">
            <VideoCameraIcon className="h-6 w-6 text-blue-600" />
            <span>
              Links to the recorded lecture session.
            </span>
          </li>
        </ul>

        <p>
          Use these resources together to reinforce key concepts in causal inference
          and applied machine learning. We recommend reviewing notes before class,
          running the code examples yourself, and revisiting the videos for clarification.
        </p>
      </div>

      {/* Table of lectures */}
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
