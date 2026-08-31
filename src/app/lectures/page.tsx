// src/app/lectures/page.tsx
import React from "react";
import { BookOpenIcon } from "@heroicons/react/24/outline";
import { asset } from "@/site.config";

type Lecture = {
  topic: string;
  description: string;
  notes?: string;
};

export default function LecturesPage() {
  const lectures: Lecture[] = [
    {
      topic: "Week 1: Randomized Controlled Trials & Emulation",
      description:
        "Why trials anchor causal questions: eligibility, time zero, assignment, adherence, and emulating a target trial with observational data.",
      notes: asset("/notes/week1_trials_emulation.pdf"),
    },
    {
      topic: "Week 2: Data Collection",
      description:
        "From estimands to data requirements: censoring, truncation, competing events, and pairing estimands with estimators.",
      notes: asset("/notes/week2_data_collection.pdf"),
    },
    {
      topic: "Week 3: Outcome-Dependent Sampling",
      description:
        "Case-control and case-cohort designs, control-sampling schemes, and what outcome-dependent sampling buys and costs.",
      notes: asset("/notes/week3_outcome_sampling.pdf"),
    },
  ];

  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Lectures</h1>

      {/* Intro section */}
      <div className="mb-8 text-gray-700 space-y-4">
        <p>
          This page contains the course lecture notes, organized by week. Each row
          corresponds to a week of the course, with a short description of its
          contents. The notes open as PDF files via the icon on the right.
        </p>

        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <BookOpenIcon className="h-6 w-6 text-blue-600" />
            <span>Opens the written lecture notes for that week (PDF).</span>
          </li>
        </ul>

        <p>
          Notes for later weeks are posted here as the course progresses. We
          recommend reading the notes before class and revisiting them alongside
          the labs.
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
                  {lec.notes && (
                    <a
                      href={lec.notes}
                      className="text-blue-600 hover:text-blue-800"
                      title="Lecture notes (PDF)"
                    >
                      <BookOpenIcon className="h-8 w-8" />
                    </a>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
