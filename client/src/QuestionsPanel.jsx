export default function QuestionsPanel({ questions }) {
    if (!questions.length) return null;

    return (
        <div className="mt-6 bg-white shadow rounded-2xl p-4">
            <h2 className="font-bold text-lg mb-3">Interview Questions</h2>

            <ul className="space-y-2">
                {questions.map((q, i) => (
                    <li
                        key={i}
                        className="border rounded-xl px-3 py-2 text-slate-700"
                    >
                        {i + 1}. {q}
                    </li>
                ))}
            </ul>
        </div>
    );
}