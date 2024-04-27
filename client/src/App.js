import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import SubjectDetailPage from "./pages/SubjectDetailPage";
import { NavBar } from "./components/navbar";

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/category" element={<CoursesPage />} />
          <Route path="/subjectDetail" element={<SubjectDetailPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
