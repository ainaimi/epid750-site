// src/app/assignments/page.tsx
import React from "react";
import { BookOpenIcon } from "@heroicons/react/24/outline";
import { asset } from "@/site.config";

type Assignment = {
  topic: string;
  description: string;
  due: string;
  pdf: string;
};

export default function AssignmentsPage() {
  const assignments: Assignment[] = [
    {
      topic: "Assignment 1",
      description:
        "Randomized trials, trial emulation, and data collection (Weeks 1–2). Free-response questions; graded for completion.",
      due: "Due Tuesday, September 15, 2026",
      pdf: asset("/assignments/assignment1.pdf"),
    },
  ];

  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Assignments</h1>

      <div className="mb-8 text-gray-700 space-y-4">
        <p>
          Assignments are posted here as they are released, and submitted
          according to the instructions in the syllabus. Each assignment opens as
          a PDF via the icon on the right.
        </p>
      </div>

      <table className="w-full border-collapse">
        <tbody>
          {assignments.map((a, idx) => (
            <tr
              key={a.topic}
              className={`${
                idx % 2 === 0 ? "bg-gray-50" : "bg-white"
              } border-b border-dotted border-gray-950 ${
                idx === 0 ? "border-t border-dotted border-gray-950" : ""
              }`}
            >
              <td className="px-4 py-2">
                <div className="font-medium">{a.topic}</div>
                <div className="text-sm text-gray-600">{a.description}</div>
                <div className="text-sm font-medium text-gray-800">{a.due}</div>
              </td>
              <td className="px-4 py-2 text-right">
                <div className="flex justify-end gap-6">
                  <a
                    href={a.pdf}
                    className="text-blue-600 hover:text-blue-800"
                    title="Assignment (PDF)"
                  >
                    <BookOpenIcon className="h-8 w-8" />
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
