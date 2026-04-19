import { useEffect, useState } from "react";
import API from "./api";

export default function HistoryPage() {
  const [sessions, setSessions] = useState([]);
  const [active, setActive] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          window.location.href = "/auth";
          return;
        }

        const res = await API.get("/history", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setSessions(res.data);

        if (res.data.length > 0) {
          setActive(res.data[0]);
        }
      } catch { }
    };

    load();
  }, []);

  return (
    <div className="h-screen flex bg-slate-100">
      {/* Sidebar */}
      <div className="w-80 bg-white border-r overflow-y-auto">
        <div className="p-4 text-xl font-bold border-b">
          History 🕘
        </div>

        {sessions.map((session) => (
          <button
            key={session.sessionId}
            onClick={() => setActive(session)}
            className={`w-full text-left p-4 border-b hover:bg-slate-50 ${active?.sessionId === session.sessionId
                ? "bg-slate-100"
                : ""
              }`}
          >
            <p className="font-semibold">
              {session.companyName}
            </p>
            <p className="text-sm text-slate-500">
              {session.jobTitle}
            </p>
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6">
        {active ? (
          <div>
            <h1 className="text-3xl font-bold mb-1">
              {active.companyName}
            </h1>

            <p className="text-slate-500 mb-6">
              {active.jobTitle}
            </p>

            <div className="space-y-5">
              {active.items.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow p-5"
                >
                  <h2 className="font-semibold mb-2">
                    {item.type}
                  </h2>

                  <pre className="whitespace-pre-wrap text-sm text-slate-700">
                    {item.content}
                  </pre>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>No history found.</div>
        )}
      </div>
    </div>
  );
}