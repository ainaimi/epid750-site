// src/app/labs/page.tsx
import React from "react";
import { DocumentTextIcon, ArchiveBoxArrowDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { asset } from "@/site.config";

type Lab = {
  topic: string;
  description: string;
  handout: string;
  starter: string;
};

export default function LabsPage() {
  const labs: Lab[] = [
    {
      topic: "Lab 1: Emulating a Target Trial with ICU Data",
      description:
        "Build an analytic dataset from the eICU demo database, from protocol and eligibility through exposure, outcome, and quality control.",
      handout: asset("/labs/lab1.html"),
      starter: asset("/labs/lab1_starter.zip"),
    },
    {
      topic: "Lab 2: Sampling Controls Three Ways",
      description:
        "Cumulative (survivor), case-base, and incidence-density sampling on the Lab 1 cohort, and which effect measure each scheme recovers.",
      handout: asset("/labs/lab2.html"),
      starter: asset("/labs/lab2_starter.zip"),
    },
  ];

  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Labs</h1>

      <div className="mb-8 text-gray-700 space-y-4">
        <p>
          Labs are hands-on R sessions that put the week&apos;s concepts to work.
          Each lab has a handout you can read in the browser and a starter bundle
          (project file, scripts, and README) to download and work from. Lab
          deliverables are yours to keep; they are not collected or graded.
        </p>

        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <DocumentTextIcon className="h-6 w-6 text-blue-600" />
            <span>Opens the lab handout in the browser.</span>
          </li>
          <li className="flex items-center gap-2">
            <ArchiveBoxArrowDownIcon className="h-6 w-6 text-blue-600" />
            <span>Downloads the starter files (zip).</span>
          </li>
        </ul>

        <p>
          The datasets used by the labs, including the raw eICU demo tables and
          the Lab 1 analytic dataset, are available on the{" "}
          <Link href="/data" className="text-blue-600 hover:underline">
            Data page
          </Link>
          .
        </p>
      </div>

      <table className="w-full border-collapse">
        <tbody>
          {labs.map((lab, idx) => (
            <tr
              key={lab.topic}
              className={`${
                idx % 2 === 0 ? "bg-gray-50" : "bg-white"
              } border-b border-dotted border-gray-950 ${
                idx === 0 ? "border-t border-dotted border-gray-950" : ""
              }`}
            >
              <td className="px-4 py-2">
                <div className="font-medium">{lab.topic}</div>
                <div className="text-sm text-gray-600">{lab.description}</div>
              </td>
              <td className="px-4 py-2 text-right">
                <div className="flex justify-end gap-6">
                  <a
                    href={lab.handout}
                    className="text-blue-600 hover:text-blue-800"
                    title="Lab handout"
                  >
                    <DocumentTextIcon className="h-8 w-8" />
                  </a>
                  <a
                    href={lab.starter}
                    className="text-blue-600 hover:text-blue-800"
                    title="Starter files (zip)"
                  >
                    <ArchiveBoxArrowDownIcon className="h-8 w-8" />
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
