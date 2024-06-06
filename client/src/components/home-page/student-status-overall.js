// import { useState, useEffect } from "react";
// import { axLOCAL, axPSU } from "../utils/config/ax";
// import { localConfig } from "../../utils/config/main";



export default function StudentStatusOverall({
  studentStatusOverall,
  curriculumStructure,
}) 
{
  // const [studentEnroll, setStudentEnroll] = useState(null);
  // const [studentDetail, setStudentDetail] = useState(null);
  // const [studentStatusOverall, setStudentStatusOverall] = useState({
  //   cumGpa: "",
  //   estScore: "",
  //   cumActHour: "",
  //   cumCredit: "",
  // });


  // const fetchLocalStudentDetail = async () => {
  //   try {
  //     const result = await axLOCAL.get(`/student/${studentDetail?.studentId}`);
  //     // console.log(result);
  //     setStudentStatusOverall((prevState) => ({
  //       ...prevState,
  //       estScore: result.data.estScore,
  //       cumActHour: result.data.cumActHour,
  //     }));
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const fetchStudentEnrollment = async () => {
  //   try {
  //     const result = await axLOCAL(
  //       `${localConfig.getEnrollmentByStudId}/${studentDetail?.studentId}`
  //     );
  //     console.log(result.data);
  //     setStudentEnroll(result.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   if (studentDetail?.studentId) {
  //     fetchStudentEnrollment();
  //   }
  //   fetchLocalStudentDetail();
  // }, [studentDetail]);

  return (
    <>
      <div className="grid gap-3">
        <div>
          <div class="max-w-sm p-6 bg-pale-blue-gray border-gray-200 dark:bg-gray-900 rounded-lg shadow ">
            <div>
              หน่วยกิตสะสม{" "}
              {studentStatusOverall.cumCredit
                ? studentStatusOverall.cumCredit
                : 0}{" "}
              / {curriculumStructure?.totalCredit}
            </div>
            <br/>
            <div class="max-w-sm p-6 bg-white rounded-lg shadow ">
            <div > 
              หมวดศึกษาทั่วไป {" "}
              {studentStatusOverall.cumCredit
                ? studentStatusOverall.cumCredit
                : 0}{" "}
              / {curriculumStructure?.totalCredit}
            </div>
            <div> 
              หมวดวิชาเฉพาะ {" "}
              {studentStatusOverall.cumCredit
                ? studentStatusOverall.cumCredit
                : 0}{" "}
              / {curriculumStructure?.totalCredit}
            </div>
            <div> 
              หมวดวิชาเลือกเสรี{" "}
              {studentStatusOverall.cumCredit
                ? studentStatusOverall.cumCredit
                : 0}{" "}
              / {curriculumStructure?.totalCredit}
            </div>
          </div>
          </div>
        </div>
        <div>
          <div class="max-w-sm p-6 bg-gradient-to-r bg-pale-blue-gray border-gray-200 dark:bg-gray-900 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div >
              GPA {" "}
              {studentStatusOverall.cumGpa ? studentStatusOverall.cumGpa : 0}
            </div>
          </div>
        </div>
        <div>
          <div class="max-w-sm p-6 bg-gradient-to-r bg-pale-blue-gray border-gray-200 dark:bg-gray-900 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div >
              est-score{" "}
              {studentStatusOverall.estScore
                ? studentStatusOverall.estScore
                : 0}{" "}
              / 100
            </div>
          </div>
        </div>
        <div>
          <div class="max-w-sm p-6 bg-gradient-to-r bg-pale-blue-gray border-gray-200 dark:bg-gray-900 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div >
              ชั่วโมงกิจกรรม{" "}
              {studentStatusOverall.cumActHour
                ? studentStatusOverall.cumActHour
                : 0}{" "}
              / 100
            </div>
            <br/>
            <div class="max-w-sm p-6 bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div>
              กิจกรรมเสริมสร้างสมรรถนะ{" "}
              {studentStatusOverall.cumActHour
                ? studentStatusOverall.cumActHour
                : 0}{" "}
              / 100
            </div>
          </div>
          <br/>
          <div class="max-w-sm p-6 bg-white  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div >
              กิจกรรมเข้าร่วมตามความสนใจ{" "}
              {studentStatusOverall.cumActHour
                ? studentStatusOverall.cumActHour
                : 0}{" "}
              / 100
            </div>
          </div>
          </div>
        </div> 
      </div>
    </>
  );
}
