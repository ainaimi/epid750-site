import Link from "next/link"

export default function LecturesPage() {
  const lectures = [
    { topic: "Introduction", code: "#", notes: "#", video: "#" },
    { topic: "Datasets", code: "#", notes: "#", video: "#" },
    { topic: "Causal Inference", code: "#", notes: "#", video: "#" },
  ]

  return (
    <div>
      <h1 className="text-xl font-semibold text-brand-navy mb-4">Lectures</h1>
      <table className="table-auto border-collapse border border-neutral-400 w-full text-sm">
        <thead>
          <tr className="bg-neutral-50">
            <th className="border border-neutral-300 px-3 py-2 text-left">Topic</th>
            <th className="border border-neutral-300 px-3 py-2">Code</th>
            <th className="border border-neutral-300 px-3 py-2">Notes</th>
            <th className="border border-neutral-300 px-3 py-2">Video</th>
          </tr>
        </thead>
        <tbody>
          {lectures.map((lec) => (
            <tr key={lec.topic}>
              <td className="border border-neutral-300 px-3 py-2">{lec.topic}</td>
              <td className="border border-neutral-300 px-3 py-2 text-center">
                <Link href={lec.code} className="text-brand-link underline">Code</Link>
              </td>
              <td className="border border-neutral-300 px-3 py-2 text-center">
                <Link href={lec.notes} className="text-brand-link underline">Notes</Link>
              </td>
              <td className="border border-neutral-300 px-3 py-2 text-center">
                <Link href={lec.video} className="text-brand-link underline">Video</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
