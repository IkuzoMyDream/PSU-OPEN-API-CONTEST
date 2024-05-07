import { useEffect, useState } from "react";
import { useAuth } from "react-oidc-context";
import { useNavigate } from "react-router-dom";
import { localConfig, psuConfig } from "../utils/config/main";
import StudentDetail from "../components/home-page/student-detail";
import { axLOCAL, axPSU } from "../utils/config/ax";

import React from "react";

import StudentStatusOverall from "../components/home-page/student-status-overall";
import StudentStatusChart from "../components/home-page/student-status-chart";


function HomePage() {
  const auth = useAuth();
  const navigate = useNavigate();

  const [studentDetail, setStudentDetail] = useState(null);
  const [profileImage, setProfileImage] = useState(null);

  const [studentStatusOverall, setStudentStatusOverall] = useState({
    cumGpa: "",
    estScore: "",
    cumActHour: "",
    cumCredit: "",
  });

  const [studentStatusChart, setStudentStatusChart] = useState({
    credits: {
      subjGroup1: "",
      subjGroup2: "",
      subjGroup3: "",
      subjGroup4: "",
      subjGroup5: "",
      subjGroup6: "",
      subjGroup7: "",
      geEdu: "",
    },
  });

  const [curriculumStructure, setCurriculumStructure] = useState(null);

  const fetchStudentProfileImage = async () => {
    try {
      const response = await axPSU.get(psuConfig.getStudentProfileImage);
      setProfileImage(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchPsuStudentDetail = async () => {
    try {
      const result = await axPSU.get(psuConfig.getStudentDetail);
      // console.log(result.data);
      setStudentDetail(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchLocalStudentDetail = async () => {
    try {
      const result = await axLOCAL.get(`/student/${studentDetail?.studentId}`);
      // console.log(result);
      setStudentStatusOverall((prevState) => ({
        ...prevState,
        estScore: result.data.estScore,
        cumActHour: result.data.cumActHour,
      }));
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
      const result = await axLOCAL.get(
        `${localConfig.getCurriculumStructureById}/${`1`}`
      );
      setCurriculumStructure(result.data.curriculum_structure);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchStudentGPA = async () => {
    try {
      const result = await axPSU.get(psuConfig.getStudentGPA);
      setStudentStatusOverall((prevState) => ({
        ...prevState,
        cumGpa: result.data[result.data.length - 1].cumGpa,
        cumCredit: result.data[result.data.length - 1]?.cumCredit,
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const fetchStudentGrade = async () => {
    try {
      const result = await axPSU.get(psuConfig.getStudentGrade);
      // console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchPsuCourses = async () => {
    try {
      const result = await axPSU.get(
        `${psuConfig.getSubjectOffer}/${`1`}/${`2562`}`
      );
      console.log("courses",result.data.data);
      // await Promise.all(
      //   majors.map(async (major) => {
      //     const result = await axLOCAL.post(localConfig.postMajor, {
      //       majorId: major.majorId,
      //       majorNameThai: major.majorNameThai,
      //       majorNameEng: major.majorNameEng,
      //       deptId: major.deptId,
      //     });
      //     console.log(result);
      //   })
      // );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (auth.isAuthenticated) {
      fetchPsuStudentDetail();
      fetchStudentEnrollment();
      fetchCurriculumStructure();
      fetchStudentProfileImage();
      fetchStudentGPA();
      fetchStudentGrade();
      fetchPsuCourses();
    }
  }, [auth.user, auth]);

  useEffect(() => {
    fetchLocalStudentDetail();
  }, [studentDetail]);

  // useEffect(() => {
  //   console.log(curriculumStructure);
  // }, [curriculumStructure]);

  return (
    <>
      <div className="container mx-auto sm-auto md-auto lg-auto px-20 py-10">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-1">
            {profileImage && <img src={profileImage} />}
            <StudentDetail studentDetail={studentDetail} />
          </div>
          <div className="col-span-3">
            <StudentStatusOverall
              studentStatusOverall={studentStatusOverall}
              curriculumStructure={curriculumStructure}
            />
            <StudentStatusChart />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
