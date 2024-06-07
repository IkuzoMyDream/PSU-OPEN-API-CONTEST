// import { useState, useEffect } from "react";
// import { axLOCAL, axPSU } from "../utils/config/ax";
// import { localConfig } from "../../utils/config/main";
import { Progress, Typography } from "@material-tailwind/react";


export default function StudentStatusOverall({
  studentStatusOverall,
  curriculumStructure,
  studentEnrollment,
  
}) 
{
  // const [studentEnroll, setStudentEnroll] = useState(null);
  // const [studentDetail, setStudentDetail] = useState(null);
  // const [studentStatusOverall, setStudentStatusOverall] = useState({
  //   cumGpa: "",
  //   estScore: "",
  //   cumActHour: "",
  //   cumC redit: "",
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


  console.log("gaymannnnn =",studentEnrollment)
  console.log("gaysdsdkmbsd = ",curriculumStructure)
  return (
    <>
      <div className="grid gap-3">


        
        <div>
        <div className="grid grid-col-2 gap-1">
          <div class="max-w-full p-6 bg-pale-blue-gray border-gray-200 dark:bg-gray-900 rounded-lg shadow ">
            <div>
              หน่วยกิตสะสม{" "}
              {studentStatusOverall.cumCredit
                ? studentStatusOverall.cumCredit
                : 0}{" "}
              / {curriculumStructure?.totalCredit}
            </div>
            <br/>
           
            <div class="max-w-full p-6 bg-white rounded-lg shadow " > 
              หมวดศึกษาทั่วไป {" "}
              {studentEnrollment?.geAllCredit
                ? studentEnrollment?.geAllCredit
                : 0}{" "}
              / {parseInt(curriculumStructure?.geEduCourse.elecEduCourse.totalCredit) + parseInt(curriculumStructure?.geEduCourse.requiredEduCourse.totalCredit)}
            </div>
            <div class="max-w-full p-6 bg-white rounded-lg shadow mt-2 "> 
              หมวดวิชาเฉพาะ {" "}
              {studentEnrollment?.concenAllCredit
                ? studentEnrollment?.concenAllCredit
                : 0}{" "}
              / {curriculumStructure?.concentrationCourse.totalCredit}
            </div>
            <div class="max-w-full p-6 bg-white rounded-lg shadow mt-2"> 
              หมวดวิชาเลือกเสรี{" "}
              {studentEnrollment?.freeAllCredit
                ? studentEnrollment?.freeAllCredit
                : 0}{" "}
              / {curriculumStructure?.freeElecCourse.totalCredit }
            </div>
          
          </div>
          {/* f */}
        <div className="col-start-2">
        <div class="max-w-full ml-2 px-5 py-16 bg-gradient-to-r bg-pale-blue-gray border-gray-200 dark:bg-gray-900 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div >
            ผลการเรียนเฉลี่ยสะสม {" "}
              {studentStatusOverall.cumGpa ? studentStatusOverall.cumGpa : 0}
        </div>
        {/* f */}
        
            </div>
            <div>
          <div class="max-w-full ml-2 mt-8 px-5 py-16 bg-gradient-to-r bg-pale-blue-gray border-gray-200 dark:bg-gray-900 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div >
            PSU English Skills Test{" "}
            <p>
              {studentStatusOverall.estScore
                ? studentStatusOverall.estScore
                : 0}{" "}
              / 100
                </p>
            </div>
          </div>
        </div>
          </div>
        </div>
        </div>
        <div>
          
        </div>
        
        <div>
          <div class="max-w-full p-6 bg-gradient-to-r bg-pale-blue-gray border-gray-200 dark:bg-gray-900 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div >
            <Typography variant="h6">

              ชั่วโมงกิจกรรม{" "}
              {studentStatusOverall.cumActHour
                ? studentStatusOverall.cumActHour
                : 0}{" "}
              / 100
                </Typography>
            </div>
            <br/>
            <div class="max-w-f p-6 bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="w-full">
      <div className="mb-2 flex items-center justify-between gap-4">
        <Typography color="blue-gray" variant="h6">
        กิจกรรมเสริมสร้างสมรรถนะ
        </Typography>
        <Typography color="blue-gray" variant="h6">
          32/50
        </Typography>
      </div>
      <Progress value={32*2} className="bg-gray-300" />
    </div>
          </div>
          <br/>
          <div class="max-w-full p-6 bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="w-full">
      <div className="mb-2 flex items-center justify-between gap-4">
        <Typography color="blue-gray" variant="h6">
        กิจกรรมเข้าร่วมตามความสนใจ
        </Typography>
        <Typography color="blue-gray" variant="h6">
          36/50
        </Typography>
      </div>
      <Progress value={36*2} className="bg-gray-300" />
    </div>
          </div>
          </div>
        </div> 
      </div>
    </>
  );
}
