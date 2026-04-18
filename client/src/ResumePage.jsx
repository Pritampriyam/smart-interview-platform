import { useEffect, useState } from "react";

export default function ResumePage() {
  const [resume, setResume] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("resume");
    if (data) setResume(data);
  }, []);

  const printResume = () => window.print();

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 print:px-0">
      <div className="flex justify-between items-center mb-6 print:hidden">
        <h1 className="text-3xl font-bold">ATS Resume 📄</h1>

        <button
          onClick={printResume}
          className="bg-blue-600 text-white px-4 py-2 rounded-xl"
        >
          Download / Print
        </button>
      </div>

      <div className="bg-white shadow rounded-2xl p-10 whitespace-pre-wrap leading-7 text-slate-800 print:shadow-none print:rounded-none">
        {resume || "No resume generated yet."}
      </div>
    </div>
  );
}