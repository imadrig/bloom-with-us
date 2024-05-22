import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { RouterProvider } from "react-aria-components";
import "./App.css";
import HomePage from "./Pages/Home";
import SkillAssessmentStart from "./Pages/SkillAssessment/SkillsAssessment.jsx";
import Header from "./components/PageLayout/Header";
import AssessmentIntro from "./Pages/AssessmentIntro";
import ResultsPage from "./Pages/SkillAssessment/ResultsPage.jsx";

function App() {
  let navigate = useNavigate();

  return (
    <RouterProvider navigate={navigate}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/skill-assessment" element={<SkillAssessmentStart />} />
        <Route path="assessment-intro" element={<AssessmentIntro />} />
        <Route path="/results-page" element={<ResultsPage />} />
      </Routes>
    </RouterProvider>
  );
}

export default App;

<BrowserRouter>
  <App />
</BrowserRouter>;
