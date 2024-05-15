import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { RouterProvider } from "react-aria-components";
import "./App.css";
import HomePage from "./Pages/Home";
import CustomerSuccessManagerPath from "./Pages/CareerPaths/CustomerSuccessManagerPath/CustomerSuccessManagerSkillsAssessment";
import Header from "./components/PageLayout/Header";

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
      </Routes>
    </RouterProvider>
  );
}

export default App;

<BrowserRouter>
  <App />
</BrowserRouter>;
