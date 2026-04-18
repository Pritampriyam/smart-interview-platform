import { useEffect, useState } from "react";

export default function SkillGapPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("skillGap");
    if (data) setItems(JSON.parse(data));
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-2">Skill Gap Analysis 🎯</h1>
      <p className="text-slate-600 mb-8">
        Missing skills, matched skills, and preparation guidance.
      </p>

      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-2xl p-5 border border-slate-100"
          >
            <p className="text-slate-800">{item}</p>
          </div>
        ))}

        {items.length === 0 && (
          <div className="bg-white rounded-2xl p-6 shadow">
            No analysis generated yet.
          </div>
        )}
      </div>
    </div>
  );
}