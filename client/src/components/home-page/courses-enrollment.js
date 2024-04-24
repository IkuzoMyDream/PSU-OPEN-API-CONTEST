import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "react-oidc-context";

function EnrollmentCourses() {
  const auth = useAuth();

  const [studentDetail, setStudentDetail] = useState(null);
  const fectStudentDetail = async () => {
    const result = await axios.get(
      `https://api-gateway.psu.ac.th/Test/regist/SubjectOfferCampus/01/1/2564?facID=15&deptID=202&limit=1000`,
      {
        headers: {
          credential: "api_key=ZsB/vDqTm8vFOkyI1gYArrN/AGfXhqNT",
          token: auth.user.access_token,
        }, 
      }
    );
    // console.log("result = ", result);
    setStudentDetail(result.data.data[0]);
  };
  useEffect(() => {
    if (auth.isAuthenticated) {
      fectStudentDetail();
    }
  }, [auth.user]);
  //console.log(auth.user.access_token)
  // console.log(studentDetail);
  return (
    <div>
      {/* <h1>Student Detail</h1> */}
      {studentDetail ? (
        <div>
          <div>
            <p>เทอม: {studentDetail.eduTerm}</p>
            <p>ปีการศึกษา: {studentDetail.eduYear}</p>
            <p>รหัสวิชา: {studentDetail.subjectCode}</p>
            <p>ชื่อวิชา: {studentDetail.subjectNameThai}({studentDetail.shortNameEng})</p>
            <p>หน่วยกิต: {studentDetail.credit}</p>
          </div>
          <pre>{JSON.stringify(studentDetail, null, 2)}</pre> {/*json ทั้งหมดของapiนี้ (SubjectOfferCampus) */}
        </div>
      ) : (

        <p>Loading...</p>
      )}

    </div>
  );
}

export default EnrollmentCourses;

