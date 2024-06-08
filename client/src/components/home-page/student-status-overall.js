// import { useState, useEffect } from "react";
// import { axLOCAL, axPSU } from "../utils/config/ax";
// import { localConfig } from "../../utils/config/main";
import { Progress, Typography } from "@material-tailwind/react";


export default function StudentStatusOverall({
  studentStatusOverall,
  curriculumStructure,
  studentEnrollment,

}) {
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
            <div className="relative max-w-full p-6 bg-pale-blue-gray border-gray-200 dark:bg-gray-900 rounded-lg shadow">

              <div>
              <Typography variant="h6" className=" text-3xl">
                หน่วยกิตสะสม
                </Typography>
              </div>
              <br />

              <div class="max-w-full p-6 bg-white rounded-lg shadow " >
                <div className="w-full">
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <Typography color="blue-gray" variant="h6">
                    หมวดศึกษาทั่วไป
                    </Typography>
                    <Typography color="blue-gray" variant="h6">
                    {studentEnrollment?.geAllCredit
                  ? studentEnrollment?.geAllCredit
                  : 0}{" "}
                / {parseInt(curriculumStructure?.geEduCourse.elecEduCourse.totalCredit) + parseInt(curriculumStructure?.geEduCourse.requiredEduCourse.totalCredit)}
                    </Typography>
                  </div>
                  <Progress value={(parseInt( studentEnrollment?.geAllCredit)*parseInt(100))/(parseInt(curriculumStructure?.geEduCourse.elecEduCourse.totalCredit) + parseInt(curriculumStructure?.geEduCourse.requiredEduCourse.totalCredit))} />
                </div>
              </div>
              <div class="max-w-full p-6 bg-white rounded-lg shadow mt-2 ">
                <div className="w-full">
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <Typography color="blue-gray" variant="h6">
                    หมวดวิชาเฉพาะ
                    </Typography>
                    <Typography color="blue-gray" variant="h6">
                    {studentEnrollment?.concenAllCredit
                  ? studentEnrollment?.concenAllCredit
                  : 0}{" "}
                / {curriculumStructure?.concentrationCourse.totalCredit}
                    </Typography>
                  </div>
                  <Progress value={(parseInt(studentEnrollment?.concenAllCredit)*parseInt(100))/(parseInt(curriculumStructure?.concentrationCourse.totalCredit))} />
                </div>
              </div>
              <div class="max-w-full p-6 bg-white rounded-lg shadow mt-2">
                
              <div className="w-full">
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <Typography color="blue-gray" variant="h6">
                    หมวดวิชาเลือกเสรี
                    </Typography>
                    <Typography color="blue-gray" variant="h6">
                    {studentEnrollment?.freeAllCredit
                  ? studentEnrollment?.freeAllCredit
                  : 0}{" "}
                / {curriculumStructure?.freeElecCourse.totalCredit}
                    </Typography>
                  </div>
                  <Progress value={(parseInt(studentEnrollment?.freeAllCredit)*(parseInt(100))/parseInt(curriculumStructure?.freeElecCourse.totalCredit))} />
                </div>
                  </div>

            </div>
        
            {/* f */}
            <div className="col-start-2">

              <div className="max-w-full ml-2 p-6 bg-gradient-to-r bg-pale-blue-gray border-gray-200 dark:bg-gray-900 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex items-center justify-center shadow">
                <div className="absolute top-20 right-14 transform flex flex-wrap shadow-md rounded-lg">

                  <div className="w-14 h-10  rounded-lg bg-white border-4 border-white mt-2">
                    <p className=" text-green-400 text-lg font-semibold   text-center ">
                      pass
                    </p>
                  </div>
                </div>
                <div className="text-center ">
                  <Typography variant="h6" className=" text-3xl">
                    ผลการเรียนเฉลี่ยสะสม {" "}
                    <p className="mt-6 text-3xl">
                      {studentStatusOverall.cumGpa
                        ? studentStatusOverall.cumGpa
                        : 0}
                    </p>
                  </Typography>
                </div>
              </div>
              <div>
                <div class="max-w-full ml-2 mt-10 p-4 bg-gradient-to-r bg-pale-blue-gray border-gray-200 dark:bg-gray-900 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 shadow">
                  <div className="absolute top-64 right-14 transform flex flex-wrap shadow-md rounded-lg">

                    <div className="w-14 h-10  rounded-lg bg-white border-4 border-white mt-2">
                      <p className=" text-green-400 text-lg font-semibold   text-center ">
                        pass
                      </p>
                    </div>
                  </div>
                  <div className="text-center ">
                    <Typography variant="h6" className=" text-3xl">
                      PSU English Skills Test{" "}
                      <p className="mt-6 text-3xl">
                        {studentStatusOverall.estScore
                          ? studentStatusOverall.estScore
                          : 0}
                      </p>
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>

        </div>

        <div>
          <div className="relative max-w-full p-6 bg-pale-blue-gray border-gray-200 dark:bg-gray-900 rounded-lg shadow">

            <div >
              <Typography variant="h6" className="text-3xl">

                ชั่วโมงกิจกรรม
              </Typography>
            </div>
            <br />
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
                <Progress value={32 * 2} className="bg-gray-300" />
              </div>
            </div>
            <br />
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
                <Progress value={36 * 2} className="bg-gray-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
