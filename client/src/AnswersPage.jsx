import { useEffect, useState } from "react";

export default function AnswersPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("answers");
    if (data) setItems(JSON.parse(data));
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-2">Suggested Answers 💡</h1>
      <p className="text-slate-600 mb-8">
        Strong sample answers for interview preparation.
      </p>

      <div className="space-y-5">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-2xl p-5 border border-slate-100"
          >
            <h2 className="font-semibold mb-2">
              {index + 1}. {item.question}
            </h2>
            <p className="text-slate-700 whitespace-pre-wrap">
              {item.answer}
            </p>
          </div>
        ))}

        {items.length === 0 && (
          <div className="bg-white rounded-2xl p-6 shadow">
            No answers generated yet.
          </div>
        )}
      </div>
    </div>
  );
}