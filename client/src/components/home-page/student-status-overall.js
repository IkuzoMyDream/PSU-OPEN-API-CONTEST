// import { useState, useEffect } from "react";
// import { axLOCAL, axPSU } from "../utils/config/ax";
// import { localConfig } from "../../utils/config/main";
import { Progress, Typography } from "@material-tailwind/react";
import { Card } from "flowbite-react";

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

  console.log("gaymannnnn =", studentEnrollment);
  console.log("gaysdsdkmbsd = ", curriculumStructure);
  return (
    <>
      <>
        <div className="grid grid-rows-3 grid-cols-2 gap-4">
          <div className="row-span-2 col-span-1" style={{ height: "100%" }}>
            <Card style={{ height: "100%" }}>
              <div style={{ width: "100%", height: "100%" }}>
                <h5 className=" text-xl ">หน่วยกิตสะสม</h5>
                <div
                  className=" flex flex-col justify-center gap-y-10"
                  style={{ width: "100%", height: "100%" }}
                > 
                  <div>
                    <Card>
                      <div className="mb-2 flex items-center justify-between gap-4">
                        {/* <Typography color="blue-gray" variant="h1"> */}
                        <p>หมวดศึกษาทั่วไป</p>
                        {/* </Typography> */}
                        <p className=" text-blue-gray">
                          {studentEnrollment?.geAllCredit
                            ? studentEnrollment?.geAllCredit
                            : 0}{" "}
                          /{" "}
                          {parseInt(
                            curriculumStructure?.geEduCourse.elecEduCourse
                              .totalCredit
                          ) +
                            parseInt(
                              curriculumStructure?.geEduCourse.requiredEduCourse
                                .totalCredit
                            )}
                        </p>
                      </div>
                      <Progress
                        className="bg-gray-300"
                        value={
                          (parseInt(studentEnrollment?.geAllCredit) *
                            parseInt(100)) /
                          (parseInt(
                            curriculumStructure?.geEduCourse.elecEduCourse
                              .totalCredit
                          ) +
                            parseInt(
                              curriculumStructure?.geEduCourse.requiredEduCourse
                                .totalCredit
                            ))
                        }
                      />
                    </Card>
                  </div>
                  <div>
                    <Card>
                      <div className="mb-2 flex items-center justify-between gap-4">
                        <p color="blue-gray" variant="h6">
                          หมวดวิชาเฉพาะ
                        </p>
                        <p color="blue-gray" variant="h6">
                          {studentEnrollment?.concenAllCredit
                            ? studentEnrollment?.concenAllCredit
                            : 0}{" "}
                          /{" "}
                          {curriculumStructure?.concentrationCourse.totalCredit}
                        </p>
                      </div>
                      <Progress
                        className="bg-gray-300"
                        value={
                          (parseInt(studentEnrollment?.concenAllCredit) *
                            parseInt(100)) /
                          parseInt(
                            curriculumStructure?.concentrationCourse.totalCredit
                          )
                        }
                      />
                    </Card>
                  </div>
                  <div>
                    <Card className=" p-0">
                      <div className="w-full">
                        <div className="mb-2 flex items-center justify-between gap-4 p-0">
                          <p color="blue-gray" variant="h6">
                            หมวดวิชาเลือกเสรี
                          </p>
                          <p color="blue-gray" variant="h6">
                            {studentEnrollment?.freeAllCredit
                              ? studentEnrollment?.freeAllCredit
                              : 0}{" "}
                            / {curriculumStructure?.freeElecCourse.totalCredit}
                          </p>
                        </div>
                        <Progress
                          className="bg-gray-300"
                          value={
                            (parseInt(studentEnrollment?.freeAllCredit) *
                              parseInt(100)) /
                            parseInt(
                              curriculumStructure?.freeElecCourse.totalCredit
                            )
                          }
                        />
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <div
            className="col-span-1 p-0"
            style={{
              height: "100%",
            }}
          >
            <Card
              style={{
                height: "100%",
              }}
            >
              <div style={{ width: "100%", height: "100%" }}>
                <h5 className=" text-xl">ผลการเรียนเฉลี่ยสะสม</h5>
                <div
                  className=" flex items-center justify-center"
                  style={{ width: "100%", height: "100%" }}
                >
                  <h1 className=" text-center text-8xl">3.54</h1>
                </div>
              </div>
            </Card>
          </div>
          <div className="col-span-1" style={{ height: "100%" }}>
            <Card style={{ height: "100%" }}>
              <div style={{ width: "100%", height: "100%" }}>
                <h5 className=" text-xl">PSU English Skills Test</h5>
                <div
                  className=" flex items-center justify-center"
                  style={{ width: "100%", height: "100%" }}
                >
                  <h1 className=" text-center text-8xl">76</h1>
                </div>
              </div>
            </Card>
          </div>
          <div className="col-span-2">
            <Card>
              <h5 className=" text-xl ">ชั่วโมงกิจกรรม</h5>
              <div>
                <Card>
                  <div className="w-full">
                    <div className="mb-2 flex items-center justify-between gap-4">
                      <p color="blue-gray" variant="h6">
                        กิจกรรมเสริมสร้างสมรรถนะ
                      </p>
                      <p color="blue-gray" variant="h6">
                        32/50
                      </p>
                    </div>
                    <Progress value={32 * 2} className="bg-gray-300" />
                  </div>
                </Card>
              </div>
              <div>
                <Card>
                  <div className="w-full">
                    <div className="mb-2 flex items-center justify-between gap-4">
                      <p color="blue-gray" variant="h6">
                        กิจกรรมเสริมสร้างสมรรถนะ
                      </p>
                      <p color="blue-gray" variant="h6">
                        32/50
                      </p>
                    </div>
                    <Progress value={32 * 2} className="bg-gray-300" />
                  </div>
                </Card>
              </div>
            </Card>
          </div>
        </div>
      </>

      {/* <>
        <div className="grid gap-3">
          <div>
            <div className="grid grid-col-2 gap-1">
              <div className="relative max-w-full p-6 bg-pale-blue-gray border-gray-200 dark:bg-gray-900 rounded-lg shadow">
                <div>
                  <Typography variant="h6" className=" text-3xl">
                    หน่วยกิตสะสม
                  </Typography>
                </div>

                <div
                  class="max-w-full p-6 bg-white roun
                <br />ded-lg shadow "
                >
                  <div className="w-full">
                    <div className="mb-2 flex items-center justify-between gap-4">
                      <Typography color="blue-gray" variant="h6">
                        หมวดศึกษาทั่วไป
                      </Typography>
                      <Typography color="blue-gray" variant="h6">
                        {studentEnrollment?.geAllCredit
                          ? studentEnrollment?.geAllCredit
                          : 0}{" "}
                        /{" "}
                        {parseInt(
                          curriculumStructure?.geEduCourse.elecEduCourse
                            .totalCredit
                        ) +
                          parseInt(
                            curriculumStructure?.geEduCourse.requiredEduCourse
                              .totalCredit
                          )}
                      </Typography>
                    </div>
                    <Progress
                      value={
                        (parseInt(studentEnrollment?.geAllCredit) *
                          parseInt(100)) /
                        (parseInt(
                          curriculumStructure?.geEduCourse.elecEduCourse
                            .totalCredit
                        ) +
                          parseInt(
                            curriculumStructure?.geEduCourse.requiredEduCourse
                              .totalCredit
                          ))
                      }
                    />
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
                    <Progress
                      value={
                        (parseInt(studentEnrollment?.concenAllCredit) *
                          parseInt(100)) /
                        parseInt(
                          curriculumStructure?.concentrationCourse.totalCredit
                        )
                      }
                    />
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
                    <Progress
                      value={
                        (parseInt(studentEnrollment?.freeAllCredit) *
                          parseInt(100)) /
                        parseInt(
                          curriculumStructure?.freeElecCourse.totalCredit
                        )
                      }
                    />
                  </div>
                </div>
              </div>

              
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
                      ผลการเรียนเฉลี่ยสะสม{" "}
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
          <div></div>

          <div>
            <div className="relative max-w-full p-6 bg-pale-blue-gray border-gray-200 dark:bg-gray-900 rounded-lg shadow">
              <div>
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
                      กิจกรรมเสริมสร้างสมรรถนะ
                    </Typography>
                    <Typography color="blue-gray" variant="h6">
                      32/50
                    </Typography>
                  </div>
                  <Progress value={32 * 2} className="bg-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </> */}
    </>
  );
}
