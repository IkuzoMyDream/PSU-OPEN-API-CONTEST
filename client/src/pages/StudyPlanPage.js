import { useEffect, useState } from "react";
import StudentDetail from "../components/home-page/student-detail";
import { axLOCAL, axPSU } from "../utils/config/ax";
import { localConfig, psuConfig } from "../utils/config/main";
import { useAuth } from "react-oidc-context";
import CorriculumStructure from "../components/curriculum-structure-page/curriculum-structure";

function StudyPlanPage() {
  const auth = useAuth();

  const [studentDetail, setStudentDetail] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [curriculumStructure, setCurriculumStructure] = useState(null);
  const [studentEnroll, setStudentEnroll] = useState(null);

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
      setCurriculumStructure(result.data.curriculum_structure);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchStudentEnrollment = async () => {
    try {
      const result = await axLOCAL(
        `${localConfig.getEnrollmentByStudId}/${studentDetail?.studentId}`
      );
      setStudentEnroll(result.data);
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

  useEffect(() => {
    if (studentDetail?.studentId) {
      fetchStudentEnrollment();
    }
  }, [studentDetail]);

  useEffect(() => {}, [studentEnroll]);

  return (
    <>
      {profileImage &&
        studentDetail &&
        studentEnroll &&
        curriculumStructure && (
          <div className="container mx-auto sm-auto md-auto lg-auto px-20 py-10">
            <div className="grid grid-cols-4 gap-4">
              <div className="col-span-1">
                {profileImage && <img src={profileImage} />}
                <StudentDetail studentDetail={studentDetail} />
              </div>
              <div className="col-span-3">
                <div className="text-center">
                  <p className=" text-2xl">
                    {curriculumStructure?.curriculumName}
                  </p>
                </div>
                <div className="">
                  
                  <CorriculumStructure
                    studentEnroll={studentEnroll}
                    curriculumStructure={curriculumStructure}
                  />
                </div>
              </div>
              <div className=""></div>
            </div>
          </div>
        )}
    </>
  );
}

export default StudyPlanPage;
