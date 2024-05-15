import { Routes, Route, useNavigate } from "react-router-dom";
import { RouterProvider } from "react-aria-components";
import "./App.css";
import HomePage from "./Pages/Home";
import CustomerSuccessManagerPath from "./Pages/CareerPaths/CustomerSuccessManagerPath/CustomerSuccessManagerSkillsAssessment";
import Header from "./components/PageLayout/Header";
import AsessmentIntro from "./Pages/AssessmentIntro";

function App() {
  let navigate = useNavigate();

  return (
    <RouterProvider navigate={navigate}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/customer-success-manager"
          element={<CustomerSuccessManagerPath />}
        />
        <Route path="asessment-intro" element={<AsessmentIntro />} />
      </Routes>
    </RouterProvider>
  );
}

export default App;
