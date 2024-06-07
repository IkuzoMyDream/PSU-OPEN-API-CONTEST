import React, { useEffect, useState } from "react";
import { axPSU } from "../utils/config/ax";
import { psuConfig } from "../utils/config/main";
import { useAuth } from "react-oidc-context";

import SimulatingStudyResult from "../components/study-/simulating-study-result";
import StudyResultCumChart from "../components/study-/study-result-cum-chart";

function StudyResultPage() {
  const auth = useAuth();

  const [studentDetail, setStudentDetail] = useState(null);
  const [studentEnroll, setStudentEnroll] = useState(null);

  const fetchPsuStudentDetail = async () => {
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
      setStudentEnroll(result.data);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (auth.isAuthenticated) {
      fetchPsuStudentDetail();
    }
  }, [auth.user, auth]);

  useEffect(() => {
    if (studentDetail?.studentId) {
      fetchStudentEnrollment();
    }
  }, [studentDetail]);

  return (
    <>
      <div className="font-noto_sans_thai container mx-auto sm-auto md-auto lg-auto px-20 py-10">
        <StudyResultCumChart />
      </div>
      <div className="font-noto_sans_thai container mx-auto sm-auth md-auth lg-auto px-20 py-10">
        <SimulatingStudyResult studentEnroll={studentEnroll} />
      </div>
    </>
  );
}

export default StudyResultPage;
