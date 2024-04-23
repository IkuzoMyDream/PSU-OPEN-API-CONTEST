import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "react-oidc-context";
import { useNavigate } from "react-router-dom";
import EnrollmentCourses from "../components/detail-page/courses-enrollment";

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
      const result = await axios.get(
        `https://api-gateway.psu.ac.th/Test/regist/level2/StudentDetailCampus/01/token`,
        {
          headers: {
            credential: "api_key=ZsB/vDqTm8vFOkyI1gYArrN/AGfXhqNT",
            token: auth.user.access_token,
          },
        }
      );
      setStudentDetail(result.data.data[0]);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchStudentEnrollment = async () => {
    try {
      const result = await axios.get(
        `https://api-gateway.psu.ac.th/Test/regist/level2/RegistDataCampus/01/token?eduTerm=*&eduYear=*&limit=1000`,
        {
          headers: {
            credential: "api_key=ZsB/vDqTm8vFOkyI1gYArrN/AGfXhqNT",
            token: auth.user.access_token,
          },
        }
      );
      console.log(result.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCurriculumStructure = async () => {
    try {
      const result = await axios.get(
        "http://localhost:1337/curriculum-structures"
      );
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (auth.isAuthenticated) {
      fetchStudentDetail();
      fetchStudentEnrollment();
      fetchCurriculumStructure();
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
