// src/app/data/page.tsx
import React from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { asset } from "@/site.config";

type Dataset = {
  name: string;
  file: string;
  description: string;
  terms: string;
};

function DataTable({ rows }: { rows: Dataset[] }) {
  return (
    <table className="w-full border-collapse mb-8">
      <tbody>
        {rows.map((d, idx) => (
          <tr
            key={d.file}
            className={`${
              idx % 2 === 0 ? "bg-gray-50" : "bg-white"
            } border-b border-dotted border-gray-950 ${
              idx === 0 ? "border-t border-dotted border-gray-950" : ""
            }`}
          >
            <td className="px-4 py-2">
              <div className="font-medium font-mono text-sm">{d.name}</div>
              <div className="text-sm text-gray-600">{d.description}</div>
              <div className="text-xs text-gray-500">{d.terms}</div>
            </td>
            <td className="px-4 py-2 text-right">
              <a
                href={asset(d.file)}
                className="text-blue-600 hover:text-blue-800"
                title={`Download ${d.name}`}
              >
                <ArrowDownTrayIcon className="h-7 w-7 inline-block" />
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function DataPage() {
  const courseData: Dataset[] = [
    {
      name: "kidneys.csv",
      file: "/data/kidneys.csv",
      description:
        "Kidney length, age, and infection status for 350 kidneys in 180 young children; Example 1 of Carlin & Moreno-Betancur (2025), used throughout the regression weeks. The first line is a source URL, so read with skip = 1.",
      terms:
        "CC BY 4.0. Carlin (2024), University of Melbourne, doi:10.26188/26973436.v1.",
    },
    {
      name: "nhefs.csv",
      file: "/data/nhefs.csv",
      description:
        "NHANES I Epidemiologic Followup Study extract used in Hernán & Robins, Causal Inference: What If. Used in the Week 2 notes.",
      terms: "US public-use survey data; freely redistributable for teaching.",
    },
    {
      name: "NHEFS_Codebook.xls",
      file: "/data/NHEFS_Codebook.xls",
      description: "Variable codebook accompanying nhefs.csv.",
      terms: "As above.",
    },
    {
      name: "cluster_trial_data_bmi.csv",
      file: "/data/cluster_trial_data_bmi.csv",
      description:
        "Twenty patients from a cluster randomized trial example: BMI at one year (kg/m²), treatment arm (1/0), and clinical practice (10 practices, five per arm). The data are Table 1 of Mansournia et al. (2021), the Week 7 reading; the Week 7 notes use them for model-based, robust, and cluster-robust standard errors. The file begins with a byte-order mark, which readr::read_csv() ignores; base read.csv() needs fileEncoding = 'UTF-8-BOM'.",
      terms:
        "Transcribed from Table 1 of Mansournia MA et al. (2021), Int J Epidemiol 50(1):346–351, doi:10.1093/ije/dyaa260. Cite the article when you use the data.",
    },
  ];

  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Data</h1>

      <div className="mb-8 text-gray-700 space-y-4">
        <p>
          The datasets used in the course lecture notes are available here. Data
          for the labs (the raw eICU demo tables and the Lab 1 analytic dataset)
          ships inside each lab&apos;s starter bundle on the{" "}
          <Link href="/labs" className="text-blue-600 hover:underline">
            Labs page
          </Link>
          .
        </p>
      </div>

      <h2 className="text-xl font-semibold mb-3">Course datasets</h2>
      <DataTable rows={courseData} />

      <div className="text-sm text-gray-600 space-y-3">
        <p>
          <strong>kidneys.csv attribution.</strong> Carlin JB (2024). Dataset on
          kidney lengths in young children for teaching purposes. University of
          Melbourne.{" "}
          <a
            href="https://doi.org/10.26188/26973436.v1"
            className="text-blue-600 hover:underline"
          >
            doi:10.26188/26973436.v1
          </a>{" "}
          (CC BY 4.0).
        </p>
        <p>
          <strong>nhefs.csv and NHEFS_Codebook.xls attribution.</strong> The
          NHEFS extract and its codebook accompany Hernán MA and Robins JM,{" "}
          <em>Causal Inference: What If</em> (Boca Raton: Chapman &amp;
          Hall/CRC, 2020), and were obtained from the{" "}
          <a
            href="https://miguelhernan.org/whatifbook"
            className="text-blue-600 hover:underline"
          >
            book&apos;s website
          </a>
          , which also hosts the full text and related materials.
        </p>
        <p>
          <strong>cluster_trial_data_bmi.csv attribution.</strong> The twenty
          observations are Table 1 of Mansournia MA, Nazemipour M, Naimi AI,
          Collins GS, Campbell MJ (2021). Reflection on modern methods:
          demystifying robust standard errors for epidemiologists.{" "}
          <em>International Journal of Epidemiology</em> 50(1):346&ndash;351,{" "}
          <a
            href="https://doi.org/10.1093/ije/dyaa260"
            className="text-blue-600 hover:underline"
          >
            doi:10.1093/ije/dyaa260
          </a>
          . The article takes the example from Campbell MJ,{" "}
          <em>
            Statistics at Square Two: Understanding Modern Statistical
            Applications in Medicine
          </em>{" "}
          (Blackwell, 2006). Please cite the article when you use the data.
        </p>
      </div>
    </main>
  );
}
