// src/app/assignments/page.tsx
import React from "react";
import { BookOpenIcon, DocumentArrowDownIcon } from "@heroicons/react/24/outline";
import { asset } from "@/site.config";

type Assignment = {
  topic: string;
  description: string;
  due: string;
  pdf: string;
  template?: string;
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
    {
      topic: "Assignment 2",
      description:
        "Outcome-dependent sampling and regression as a toolkit (Weeks 3–4). Free-response questions; graded for completion.",
      due: "Due Tuesday, September 22, 2026",
      pdf: asset("/assignments/assignment2.pdf"),
    },
    {
      topic: "Assignment 3",
      description:
        "The anatomy of a regression model and generalized linear models (Weeks 5–6). Free-response questions; graded for completion. Submitted as an R Markdown file: download the template, write your answers in it, and knit it to PDF before uploading.",
      due: "Due Monday, October 26, 2026",
      pdf: asset("/assignments/assignment3.pdf"),
      template: asset("/assignments/assignment3_template.Rmd"),
    },
  ];

  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Assignments</h1>

      <div className="mb-8 text-gray-700 space-y-4">
        <p>
          Assignments are posted here as they are released, and submitted
          according to the instructions in the syllabus. Each assignment opens as
          a PDF via the book icon on the right. Where an assignment is submitted
          as an R Markdown file, the second icon downloads the answer template
          (an .Rmd file with the questions and an answer block under each part).
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
                  {a.template ? (
                    <a
                      href={a.template}
                      download
                      className="text-blue-600 hover:text-blue-800"
                      title="Answer template (Rmd)"
                    >
                      <DocumentArrowDownIcon className="h-8 w-8" />
                    </a>
                  ) : (
                    <span aria-hidden="true" className="h-8 w-8" />
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
