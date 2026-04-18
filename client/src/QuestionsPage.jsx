import { useEffect, useState } from "react";

export default function QuestionsPage() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("questions");
    if (data) setQuestions(JSON.parse(data));
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-2">Interview Questions 🚀</h1>
      <p className="text-slate-600 mb-8">
        Personalized questions generated for your preparation.
      </p>

      <div className="space-y-4">
        {questions.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-2xl p-5 border border-slate-100"
          >
            <p className="font-semibold text-slate-800">
              {index + 1}. {item}
            </p>
          </div>
        ))}

        {questions.length === 0 && (
          <div className="bg-white rounded-2xl p-6 shadow">
            No questions generated yet.
          </div>
        )}
      </div>
    </div>
  );
}