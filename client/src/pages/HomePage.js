import { useEffect, useState } from "react";
import { useAuth } from "react-oidc-context";
import { useNavigate } from "react-router-dom";
import { localConfig, psuConfig } from "../utils/config/main";
import { NavBar } from "../components/navbar";
import StudentDetail from "../components/home-page/student-detail";
import { axLOCAL, axPSU } from "../utils/config/ax";

function HomePage() {
  const auth = useAuth();
  const navigate = useNavigate();

  const [studentDetail, setStudentDetail] = useState(null);
  const [profileImage, setProfileImage] = useState(null);

  const handleLogout = () => {
    auth.removeUser();
    navigate("/");
  };

  const fetchStudentProfileImage = async () => {
    try {
      const response = await axPSU.get(psuConfig.getStudentProfileImage);
      console.log(response.data);
      setProfileImage(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchStudentDetail = async () => {
    try {
      const result = await axPSU.get(psuConfig.getStudentDetail);

      setStudentDetail(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchStudentEnrollment = async () => {
    try {
      const result = await axPSU.get(psuConfig.getAllRegistData);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCurriculumStructure = async () => {
    try {
      const result = await axLOCAL.get(localConfig.getAllCurriculumStructures);
      // console.log("curriculum structures", result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (auth.isAuthenticated) {
      fetchStudentDetail();
      fetchStudentEnrollment();
      fetchCurriculumStructure();
      fetchStudentProfileImage();
    }
  }, [auth.user, auth]);

  return (
    <>
      <NavBar />
      <div className="container mx-auto sm-auto md-auto lg-auto px-20 py-10">
        <div className="grid">
          {profileImage && <img src={profileImage} />}
          <StudentDetail studentDetail={studentDetail} />
        </div>
      </div>
    </>
  );
}

export default HomePage;
