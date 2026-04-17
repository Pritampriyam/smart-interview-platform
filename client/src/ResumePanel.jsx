export default function ResumePanel({ resume }) {
    if (!resume || resume.trim() === "") return null;

    return (
        <div className="mt-6 bg-white shadow rounded-2xl p-4">
            <h2 className="font-bold text-lg mb-3">ATS Resume</h2>

            <div className="whitespace-pre-wrap text-sm text-slate-700 border rounded-xl p-3 bg-slate-50">
                {resume}
            </div>

            <button
                onClick={() => window.print()}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-xl"
            >
                Download / Print
            </button>
        </div>
    );
}