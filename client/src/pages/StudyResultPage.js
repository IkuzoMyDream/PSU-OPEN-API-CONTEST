import React, { useEffect, useState } from "react";
import { axLOCAL, axPSU } from "../utils/config/ax";
import { localConfig, psuConfig } from "../utils/config/main";
import { useAuth } from "react-oidc-context";

import SimulatingStudyResult from "../components/study-/simulating-study-result";
import StudyResultCumChart from "../components/study-/study-result-cum-chart";

function StudyResultPage() {
  const auth = useAuth();

  const [studentDetail, setStudentDetail] = useState(null);
  const [studentEnrolls, setStudentEnrolls] = useState(null);
  const [studentGrades, setStudentGrades] = useState(null);

  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchPsuStudentDetail = async () => {
    try {
      const result = await axPSU.get(psuConfig.getStudentDetail);
      // console.log(result.data);
      setStudentDetail(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchStudentEnrollments = async () => {
    try {
      const result = await axPSU.get(psuConfig.getAllRegistData);
      setStudentEnrolls(result.data);
      // console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchPsuStudentGrade = async () => {
    try {
      const result = await axPSU.get(psuConfig.getStudentGrade);
      setStudentGrades(result.data);
      // console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCourses = async () => {
    try {
      const result = await axLOCAL.get(localConfig.getAllcourses);
      if (result.data) {
        setCourses(
          result.data.map((course) =>
            course.credit
              ? course
              : {
                  ...course,
                  credit: [
                    "1(0-3-0)",
                    "3((3)-0-6)",
                    "2((2)-0-4)",
                    "5((2)-3-3)",
                    "6(3-3-3)",
                    "4((2)-0-2)",
                  ][Math.floor(Math.random() * 6)],
                }
          )
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCategories = async () => {
    try {
      const result = await axLOCAL.get(localConfig.getCategories);
      // console.log("all cata", result);
      const filterdHeader = result.data.map((item) => ({
        categoryId: item.categoryId,
        categoryNameEng: item.categoryType,
        categoryNameThai: item.subjectGroupName,
        generalType: item.generalType,
        categoryNumber: item.subjectGroupNumber,
        subCategory:
          item.subCategoryIds.length !== 0 ? item.subCategoryIds : null,
      }));
      setCategories(filterdHeader);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (auth.isAuthenticated) {
      fetchPsuStudentDetail();
      fetchPsuStudentGrade();
    }
    fetchCategories();
    fetchCourses();
  }, [auth.user, auth]);

  useEffect(() => {
    if (studentDetail?.studentId) {
      fetchStudentEnrollments();
    }
  }, [studentDetail]);

  return (
    <>
      <div className="font-noto_sans_thai container mx-auto sm-auto md-auto lg-auto px-20 py-10">
        <StudyResultCumChart />
      </div>
      <div className="font-noto_sans_thai container mx-auto sm-auth md-auth lg-auto px-20 py-10">
        <SimulatingStudyResult
          studentEnrolls={studentEnrolls}
          studentGrades={studentGrades}
          courses={courses}
          categories={categories}
        />
      </div>
    </>
  );
}

export default StudyResultPage;
