import { useEffect, useState } from "react";
import StudentDetail from "../components/home-page/student-detail";
import { axLOCAL, axPSU } from "../utils/config/ax";
import { localConfig, psuConfig } from "../utils/config/main";
import { useAuth } from "react-oidc-context";

function StudyPlanPage() {
  const auth = useAuth();

  const [studentDetail, setStudentDetail] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [curriculumStructure, setCurriculumStructure] = useState(null);

  const fetchPsuStudentDetail = async () => {
    try {
      const result = await axPSU.get(psuConfig.getStudentDetail);
      setStudentDetail(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchStudentProfileImage = async () => {
    try {
      const response = await axPSU.get(psuConfig.getStudentProfileImage);
      setProfileImage(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCurriculumStructure = async () => {
    try {
      const result = await axLOCAL.get(
        `${localConfig.getCurriculumStructureById}/${`1`}`
      );
      console.log(result.data.curriculum_structure);
      setCurriculumStructure(result.data.curriculum_structure);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (auth.isAuthenticated) {
      fetchPsuStudentDetail();
      fetchStudentProfileImage();
      fetchCurriculumStructure();
    }
  }, [auth.user, auth]);

  return (
    <div className="container mx-auto sm-auto md-auto lg-auto px-20 py-10">
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-1">
          {profileImage && <img src={profileImage} />}
          <StudentDetail studentDetail={studentDetail} />
        </div>
      </div>
    </div>
  );
}

export default StudyPlanPage;
