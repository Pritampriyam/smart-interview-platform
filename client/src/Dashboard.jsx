import { useEffect, useState } from "react";
import API from "./api";
import { FileText, Upload, BarChart3, LogOut } from "lucide-react";
import QuestionsPanel from "./QuestionsPanel";
import AnswersPanel from "./AnswersPanel";
import ResumePanel from "./ResumePanel";
import HistoryPanel from "./HistoryPanel";

export default function Dashboard() {
  const [msg, setMsg] = useState("");
  const [text, setText] = useState("");
  const [jobDesc, setJobDesc] = useState(localStorage.getItem("jobDescription") || "");
  const [missingSkills, setMissingSkills] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [resume, setResume] = useState("");
  const [history, setHistory] = useState([]);

  const token = localStorage.getItem("token");

  const authHeader = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const loadHistory = async () => {
    try {
      const res = await API.get("/history", authHeader);
      setHistory(res.data);
    } catch {}
  };

  useEffect(() => {
    loadHistory();
  }, []);

  const saveHistory = async (type, content) => {
    try {
      await API.post(
        "/history",
        { type, content },
        authHeader
      );
      loadHistory();
    } catch {}
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/auth";
  };

  const uploadFile = async (e) => {
    try {
      const file = e.target.files[0];
      if (!file) return;

      const data = new FormData();
      data.append("resume", file);

      const res = await API.post("/upload", data, authHeader);

      setMsg(res.data.message);
      setText(res.data.extractedText || "");
    } catch {
      setMsg("Upload failed");
    }
  };

  const saveJD = () => {
    localStorage.setItem("jobDescription", jobDesc);
    setMsg("Job Description saved");
  };

  const analyzeSkills = () => {
    const skills = [
      "react","node","mongodb","docker","aws","java","python","php",
      "javascript","typescript","fastapi","svelte","mysql","postgresql"
    ];

    const missing = skills.filter(
      (skill) =>
        jobDesc.toLowerCase().includes(skill) &&
        !text.toLowerCase().includes(skill)
    );

    setMissingSkills(missing);
    saveHistory("Skill Gap", missing.join(", "));
    setMsg("Skill Gap Analysis Completed");
  };

  const generateQuestions = () => {
    const list = [
      "Tell me about yourself.",
      "Why should we hire you?",
      "Explain React hooks.",
      "How do you secure REST APIs?",
      "How would you debug a slow application?"
    ];

    setQuestions(list);
    saveHistory("Questions", list.join("\n"));
    setMsg("Interview Questions Generated");
  };

  const generateAnswers = () => {
    const data = [
      {
        question: "Tell me about yourself.",
        answer: "Summarize your background, skills, and goals."
      },
      {
        question: "How do you secure REST APIs?",
        answer: "Use auth, validation, HTTPS, roles, rate limits."
      }
    ];

    setAnswers(data);
    saveHistory("Answers", data.map(a => a.question).join("\n"));
    setMsg("Suggested Answers Generated");
  };

  const generateResume = () => {
    const content = `
PRITAM KUMAR

Professional Summary
Motivated Full Stack Developer with strong problem-solving skills.

Skills
React, Node.js, MongoDB, JavaScript

Projects
InterviewPlatform

Education
B.Tech
    `;

    setResume(content);
    saveHistory("ATS Resume", content);
    setMsg("ATS Resume Generated");
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold">Welcome Back 👋</h1>
          <p className="text-slate-600">Manage your interview prep.</p>
        </div>

        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded-xl"
        >
          <LogOut size={18} className="inline mr-2" />
          Logout
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-3xl shadow p-6">
          <Upload className="text-blue-600 mb-4" />
          <h2 className="text-xl font-semibold">Upload Resume</h2>

          <label className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-xl cursor-pointer">
            Choose Resume
            <input type="file" onChange={uploadFile} className="hidden" />
          </label>
        </div>

        <div className="bg-white rounded-3xl shadow p-6">
          <FileText className="text-blue-600 mb-4" />
          <h2 className="text-xl font-semibold">Job Description</h2>

          <textarea
            rows="6"
            value={jobDesc}
            onChange={(e) => setJobDesc(e.target.value)}
            className="w-full mt-3 border rounded-xl p-3 outline-none"
          />

          <button
            onClick={saveJD}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-xl"
          >
            Save JD
          </button>
        </div>

        <div className="bg-white rounded-3xl shadow p-6">
          <BarChart3 className="text-blue-600 mb-4" />
          <h2 className="text-xl font-semibold">Analysis Results</h2>

          <div className="space-y-3 mt-3">
            <button
              onClick={analyzeSkills}
              className="w-full bg-green-600 text-white px-4 py-2 rounded-xl"
            >
              Analyze Skills
            </button>

            <button
              onClick={generateQuestions}
              className="w-full bg-purple-600 text-white px-4 py-2 rounded-xl"
            >
              Generate Questions
            </button>

            <button
              onClick={generateAnswers}
              className="w-full bg-orange-600 text-white px-4 py-2 rounded-xl"
            >
              Suggested Answers
            </button>

            <button
              onClick={generateResume}
              className="w-full bg-indigo-600 text-white px-4 py-2 rounded-xl"
            >
              Generate ATS Resume
            </button>
          </div>

          {missingSkills.length > 0 && (
            <div className="mt-4">
              <p className="font-semibold mb-2">Missing Skills:</p>
              <ul className="list-disc ml-5 text-slate-700">
                {missingSkills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {msg && (
        <div className="mt-6 bg-green-100 text-green-700 px-4 py-3 rounded-xl font-medium">
          {msg}
        </div>
      )}

      <QuestionsPanel questions={questions} />
      <AnswersPanel answers={answers} />
      <ResumePanel resume={resume} />
      <HistoryPanel items={history} />

      {text && (
        <div className="mt-6 bg-white shadow rounded-2xl p-4">
          <h2 className="font-bold text-lg mb-2">Extracted Resume Text</h2>
          <pre className="whitespace-pre-wrap text-sm text-slate-700">
            {text}
          </pre>
        </div>
      )}
    </div>
  );
}