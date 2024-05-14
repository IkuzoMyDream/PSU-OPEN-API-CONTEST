import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import SubjectDetailPage from "./pages/SubjectDetailPage";
import { NavBar } from "./components/navbar";
import StudyPlanPage from "./pages/StudyPlanPage";
import backgroundImage from "./images/bg2.png";

function App() {
  return (
    <div className=" bg-cover bg-center h-full bg-fixed  min-h-full "
    style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/course" element={<CoursesPage />} />
          <Route path="/course/:courseCode" element={<SubjectDetailPage />} />
          <Route path="/my-study-plan" element={<StudyPlanPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
