import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import SubjectDetailPage from "./pages/CourseDetailPage";
import { NavBar } from "./components/navbar";
import StudyPlanPage from "./pages/StudyPlanPage";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/course" element={<CoursesPage />} />
          <Route path="/course/:courseCode" element={<SubjectDetailPage />} />
          <Route path="/my-study-plan" element={<StudyPlanPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
