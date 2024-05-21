import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { RouterProvider } from "react-aria-components";
import "./App.css";
import HomePage from "./Pages/Home";
import CustomerSuccessManagerPath from "./Pages/CareerPaths/CustomerSuccessManagerPath/CustomerSuccessManagerSkillsAssessment.jsx";
import Header from "./components/PageLayout/Header";
import AssessmentIntro from "./Pages/AssessmentIntro";

function App() {
  let navigate = useNavigate();

  return (
    <RouterProvider navigate={navigate}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/skill-assessment"
          element={<CustomerSuccessManagerPath />}
        />
        <Route path="assessment-intro" element={<AssessmentIntro />} />
      </Routes>
    </RouterProvider>
  );
}

export default App;

<BrowserRouter>
  <App />
</BrowserRouter>;
