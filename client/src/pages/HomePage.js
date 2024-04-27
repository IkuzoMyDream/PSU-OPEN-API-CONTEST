import { useEffect, useState } from "react";
import { useAuth } from "react-oidc-context";
import { useNavigate } from "react-router-dom";
import { localConfig, psuConfig } from "../utils/config/main";
import StudentDetail from "../components/home-page/student-detail";
import { axLOCAL, axPSU } from "../utils/config/ax";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";
import { Bar, Doughnut, Radar } from "react-chartjs-2";
import { Card } from "flowbite-react";
import StudentStatusOverall from "../components/home-page/student-status-overall";
import StudentStatusChart from "../components/home-page/student-status-chart";
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler
);

function HomePage() {
  const auth = useAuth();
  const navigate = useNavigate();

  const [studentDetail, setStudentDetail] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [cumGpa, setCumGpa] = useState(null);

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
      // console.log(result);
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
      const result = await axLOCAL.get(localConfig.getAllCurriculumStructures);
      // console.log("curriculum structures", result);
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
      console.log(result.data.data);

      // await Promise.all(
      //   result.data.data.map(async (course) => {
      //     const result = await axLOCAL.post(localConfig.postCourse, {
      //       courseCode: course.subjectCode,
      //       totalCredit: course.totalCredit,
      //       shortNameEng: course.shortNameEng,
      //       courseNameEng: course.subjectNameEng,
      //       courseNameThai: course.subjectNameThai,
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
      // fetchPsuCourses();
    }
  }, [auth.user, auth]);

  useEffect(() => {
    fetchLocalStudentDetail();
  }, [studentDetail]);

  useEffect(() => {
    // console.log(studentStatusOverall);
  }, [studentStatusOverall]);

  return (
    <>
      <div className="container mx-auto sm-auto md-auto lg-auto px-20 py-10">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-1">
            {profileImage && <img src={profileImage} />}
            <StudentDetail studentDetail={studentDetail} />
          </div>
          <div className="col-span-3">
            <StudentStatusOverall studentStatusOverall={studentStatusOverall} />
            <StudentStatusChart />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
