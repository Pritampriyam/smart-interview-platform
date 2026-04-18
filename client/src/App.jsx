import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./HomePage";
import FeaturesPage from "./FeaturesPage";
import PricingPage from "./PricingPage";
import Auth from "./Auth";
import Dashboard from "./Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import QuestionsPage from "./QuestionsPage";
import SkillGapPage from "./SkillGapPage";
import AnswersPage from "./AnswersPage";
import ResumePage from "./ResumePage";
import HistoryPage from "./HistoryPage";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/questions" element={<QuestionsPage />} />
          <Route path="/skill-gap" element={<SkillGapPage />} />
          <Route path="/answers" element={<AnswersPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/history" element={<HistoryPage />} />
        </Route>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}