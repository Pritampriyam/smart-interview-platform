export default function AnswersPanel({ answers }) {
    if (!answers.length) return null;

    return (
        <div className="mt-6 bg-white shadow rounded-2xl p-4">
            <h2 className="font-bold text-lg mb-3">Suggested Answers</h2>

            <div className="space-y-4">
                {answers.map((item, i) => (
                    <div key={i} className="border rounded-xl p-3">
                        <p className="font-semibold">{item.question}</p>
                        <p className="text-sm text-slate-700 mt-2 whitespace-pre-wrap">
                            {item.answer}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}