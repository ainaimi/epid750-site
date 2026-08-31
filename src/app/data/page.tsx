// src/app/data/page.tsx
import React from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
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
      name: "cens_dat.csv",
      file: "/data/cens_dat.csv",
      description: "Small synthetic dataset illustrating censoring structures.",
      terms: "Synthetic; created for this course.",
    },
    {
      name: "trunc_dat.csv",
      file: "/data/trunc_dat.csv",
      description: "Small synthetic dataset illustrating truncation structures.",
      terms: "Synthetic; created for this course.",
    },
  ];

  const labData: Dataset[] = [
    {
      name: "analytic_dataset.csv",
      file: "/data/analytic_dataset.csv",
      description:
        "The Lab 1 endpoint: the analytic cohort built from the eICU demo (one row per eligible ICU stay). Needed as the input to Lab 2 if you have not completed Lab 1 in place.",
      terms: "Derived from the eICU-CRD Demo; ODbL v1.0 (see below).",
    },
    {
      name: "eicu/patient.csv.gz",
      file: "/data/eicu/patient.csv.gz",
      description: "eICU-CRD Demo v2.0.1 patient table (raw input to Lab 1).",
      terms: "ODbL v1.0 (see below).",
    },
    {
      name: "eicu/infusiondrug.csv.gz",
      file: "/data/eicu/infusiondrug.csv.gz",
      description: "eICU-CRD Demo v2.0.1 infusion drug table (raw input to Lab 1).",
      terms: "ODbL v1.0 (see below).",
    },
    {
      name: "eicu/vitalAperiodic.csv.gz",
      file: "/data/eicu/vitalAperiodic.csv.gz",
      description: "eICU-CRD Demo v2.0.1 aperiodic vitals table (raw input to Lab 1).",
      terms: "ODbL v1.0 (see below).",
    },
    {
      name: "eicu/vitalPeriodic.csv.gz",
      file: "/data/eicu/vitalPeriodic.csv.gz",
      description:
        "eICU-CRD Demo v2.0.1 periodic vitals table (raw input to Lab 1). Large file (~19 MB compressed).",
      terms: "ODbL v1.0 (see below).",
    },
  ];

  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Data</h1>

      <div className="mb-8 text-gray-700 space-y-4">
        <p>
          All datasets used in the course notes and labs are available here. Lab
          1 also provides a script (<code>R/00_download_data.R</code> in the
          starter bundle) that fetches the raw eICU tables directly from
          PhysioNet; the copies below are provided for convenience and as a
          fallback.
        </p>
      </div>

      <h2 className="text-xl font-semibold mb-3">Course datasets</h2>
      <DataTable rows={courseData} />

      <h2 className="text-xl font-semibold mb-3">Lab data</h2>
      <DataTable rows={labData} />

      <div className="text-sm text-gray-600 space-y-3">
        <p>
          <strong>eICU attribution.</strong> The eICU Collaborative Research
          Database Demo (v2.0.1) is redistributed here under the{" "}
          <a
            href="https://opendatacommons.org/licenses/odbl/1-0/"
            className="text-blue-600 hover:underline"
          >
            Open Data Commons Open Database License v1.0
          </a>
          . Please cite: Pollard T, Johnson A, Raffa J, Celi LA, Badawi O, Mark
          R. eICU Collaborative Research Database Demo (version 2.0.1).
          PhysioNet, 2021.{" "}
          <a
            href="https://doi.org/10.13026/4mxk-na84"
            className="text-blue-600 hover:underline"
          >
            doi:10.13026/4mxk-na84
          </a>
          ; and the companion paper: Pollard et al., <em>Scientific Data</em>{" "}
          2018;5:180178. Documentation:{" "}
          <a href="https://eicu.mit.edu" className="text-blue-600 hover:underline">
            eicu.mit.edu
          </a>
          .
        </p>
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
      </div>
    </main>
  );
}
