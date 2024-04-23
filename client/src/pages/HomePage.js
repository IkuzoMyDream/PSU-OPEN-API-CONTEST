import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "react-oidc-context";
import { useNavigate } from "react-router-dom";
import EnrollmentCourses from "../components/detail-page/courses-enrollment";
import { axLOCAL, axPSU } from "../utils/config/ax";
import { localConfig, psuConfig } from "../utils/config/main";

function HomePage() {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.removeUser();
    navigate("/");
  };

  const [studentDetail, setStudentDetail] = useState(null);
  const [studentCoursesEnrollment, setStudentCoursesEnrollment] =
    useState(null);

  const fetchStudentDetail = async () => {
    try {

      const result = await axPSU.get(psuConfig.getStudentDetail, {
        headers: { token: auth.user.access_token },
      });

      setStudentDetail(result.data.data[0]);
      console.log("studentdetail = ", result.data.data[0]);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchStudentEnrollment = async () => {
    try {

      const result = await axPSU.get(psuConfig.getAllRegistData, {
        headers: { token: auth.user.access_token },
      });

      console.log("student enrollment = ", result.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCurriculumStructure = async () => {
    try {

      const result = await axLOCAL.get(localConfig.getAllCurriculumStructures);

      console.log("curriculum structures", result);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchStudentData = async () => {
    try {
      
      const result = await axLOCAL.get(localConfig.getAllStudents);

      console.log("student data =  ", result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (auth.isAuthenticated) {
      fetchStudentDetail();
      fetchStudentEnrollment();
      fetchCurriculumStructure();
      fetchStudentData();
    }
  }, [auth.user, auth]);

  return (
    <>
      <div>{studentDetail ? studentDetail?.studentId : "..."}</div>
      <div>
        <EnrollmentCourses />
      </div>
      <div>
        <button onClick={handleLogout}>LOGOUT</button>
      </div>
    </>
  );
}

export default HomePage;
