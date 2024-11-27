// Import Switch from react-router-dom for v6
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import GradeReportPage from "./pages/GradeReportPage";
import MissingGradeFormPage from "./pages/MissingGradeFormPage";
import InstructorContactPage from "./pages/InstructorContactPage";
import HelpAndSupportPage from "./pages/HelpAndSupportPage";
import Sidebar from "./components/SideBar";

function App() {
  return (
    <Router>
      <div id="wrapper">
        <Header />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <div class="container-fluid">
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/grade-report" element={<GradeReportPage />} />
                <Route
                  path="/missing-grade-form"
                  element={<MissingGradeFormPage />}
                />
                <Route
                  path="/instructor-contact"
                  element={<InstructorContactPage />}
                />
                <Route
                  path="/help-and-support"
                  element={<HelpAndSupportPage />}
                />
              </Routes>
            </div>
          </div>

          <Footer />
        </div>
      </div> 
    </Router>
  );
}

export default App;
