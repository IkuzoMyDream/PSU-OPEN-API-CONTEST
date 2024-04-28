import React, { useEffect, useState } from "react";
import { NavBar } from "../components/navbar";
import { axPSU } from "../utils/config/ax";
import { psuConfig } from "../utils/config/main";
import { useAuth } from "react-oidc-context";
import CourseFilterModal from "../components/course-page/CourseFilterModal";

function CoursesPage() {
  const auth = useAuth();

  const [studentEnrollment, setStudentEnrollment] = useState([]);
  const [searchCode, setSearchCode] = useState("");
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [filters, setFilters] = useState({
    general: false,
    elective: false,
    free: false,
    specialized: false
  });

  const fetchStudentEnrollment = async () => {
    try {
      const result = await axPSU.get(psuConfig.getAllRegistData);
      setStudentEnrollment(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (auth.isAuthenticated) {
      fetchStudentEnrollment();
    }
  }, [auth, auth.user]);

  const handleSearch = () => {
    // Perform search logic here
  };

  const handleFilterModalClose = () => setShowFilterModal(false);

  const handleFilterChange = (e) => {
    const { name, checked } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked
    }));
  };

  return (
    <div>
      <div className="container mx-auto p-4">
        <div className="flex justify-center items-center flex-col md:flex-row md:justify-center md:items-center mb-4">
          <div className="flex items-center mb-2 md:mb-0">
            <input
              className="border rounded px-3 py-2 mr-2 w-full"
              type="text"
              placeholder="รหัสวิชา"
              value={searchCode}
              onChange={(e) => setSearchCode(e.target.value)}
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleSearch}
            >
              ค้นหา
            </button>
          </div>
          <div className="md:mx-2">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setShowFilterModal(true)}
            >
              Filter
            </button>
          </div>
        </div>

        <CourseFilterModal
          show={showFilterModal}
          onClose={handleFilterModalClose}
          filters={filters}
          onFilterChange={handleFilterChange}
        />
      </div>
    </div>
  );
}

export default CoursesPage;
