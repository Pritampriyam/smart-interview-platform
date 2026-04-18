import { useEffect, useState } from "react";
import API from "./api";

export default function HistoryPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await API.get("/history", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setItems(res.data);
      } catch {}
    };

    load();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-2">History 🕘</h1>
      <p className="text-slate-600 mb-8">
        Your previous interview preparation sessions.
      </p>

      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-2xl p-5 border"
          >
            <h2 className="font-semibold">{item.type}</h2>
            <p className="text-sm text-slate-500 mb-2">
              {new Date(item.createdAt).toLocaleString()}
            </p>
            <pre className="whitespace-pre-wrap text-sm text-slate-700">
              {item.content}
            </pre>
          </div>
        ))}

        {items.length === 0 && (
          <div className="bg-white rounded-2xl p-6 shadow">
            No history yet.
          </div>
        )}
      </div>
    </div>
  );
}