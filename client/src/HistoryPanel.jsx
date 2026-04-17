export default function HistoryPanel({ items }) {
    if (!items.length) return null;

    return (
        <div className="mt-6 bg-white shadow rounded-2xl p-4">
            <h2 className="font-bold text-lg mb-3">History</h2>

            <div className="space-y-3">
                {items.map((item) => (
                    <div key={item._id} className="border rounded-xl p-3">
                        <p className="font-semibold">{item.type}</p>
                        <p className="text-sm text-slate-700 whitespace-pre-wrap mt-1">
                            {item.content}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}