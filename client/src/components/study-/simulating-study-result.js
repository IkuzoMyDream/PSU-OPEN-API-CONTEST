import {
  Alert,
  Button,
  Card,
  Dropdown,
  Select,
  Spinner,
  Table,
} from "flowbite-react";
import { useEffect, useState } from "react";
import { HiInformationCircle, HiOutlineArrowRight } from "react-icons/hi";
import { SimulatingStudyModal } from "./simulating-study-modal";
import { PlayArrowOutlined } from "@mui/icons-material";
import { Line } from "react-chartjs-2";

import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";

export default function SimulatingStudyResult({
  studentEnrolls,
  studentGrades,
  courses,
  categories,
}) {
  const [dropdownList, setDropdownList] = useState([
    {
      eduTerm: 1,
      eduYear: 2563,
      isSim: false,
    },
    {
      eduTerm: 2,
      eduYear: 2563,
      isSim: false,
    },
    {
      eduTerm: 1,
      eduYear: 2564,
      isSim: false,
    },
    {
      eduTerm: 2,
      eduYear: 2564,
      isSim: true,
    },
  ]);
  const [filterEnrollments, setFilterEnrollments] = useState({
    eduTerm: 1,
    eduYear: 2563,
  });
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedSimCourses, setSelectedSimCourses] = useState([]);
  const [semesterType, setSemesterType] = useState("ลงทะเบียนแล้ว");
  const [currentSimTermYear, setCurrentSimTermYear] = useState({
    eduTerm: 2,
    eduYear: 2564,
  });

  const [isStartSim, setIsStartSim] = useState(false);

  const [simSemResult, setSimSemResult] = useState([
    {
      totalCumCredit: 0,
      totalCumGradePointAvgCredit: 0,
      semGpa: 3.97,
      eduTerm: 1,
      eduYear: 2563,
    },
    {
      totalCumCredit: 0,
      totalCumGradePointAvgCredit: 0,
      semGpa: 3.92,
      eduTerm: 2,
      eduYear: 2563,
    },
    {
      totalCumCredit: 0,
      totalCumGradePointAvgCredit: 0,
      semGpa: 3.13,
      eduTerm: 1,
      eduYear: 2564,
    },
  ]);

  const [simCumResult, setSimCumResult] = useState({
    totalCumCredit: 0,
    totalCumGradePointAvgCredit: 0,
    semGpa: 0,
  });

  const [loading, setLoading] = useState(false);

  const getNextEdutermAndEduYear = (currentEduTerm, currentEduYear) => {
    return {
      eduTerm: currentEduTerm != 3 ? currentEduTerm + 1 : 1,
      eduYear: currentEduTerm != 3 ? currentEduYear : currentEduYear + 1,
    };
  };

  function ParseFloat(str, val) {
    str = str.toString();
    str = str.slice(0, str.indexOf(".") + val + 1);
    return Number(str);
  }

  const calcSimulatingGrade = () => {
    setLoading(true);
    setIsStartSim(true);

    setTimeout(() => {
      const gradeMap = {
        A: 4,
        "B+": 3.5,
        B: 3,
        "C+": 2.5,
        C: 2,
        "D+": 1.5,
        D: 1,
        E: 0,
      };

      const ParseFloat = (str, val) => {
        str = str.toString();
        str = str.slice(0, str.indexOf(".") + val + 1);
        return Number(str);
      };

      const totalCumCredit = [...studentGrades, ...selectedSimCourses].reduce(
        (total, item) => {
          const credit = !isNaN(item.credit)
            ? item.credit
            : parseFloat(item.credit[0]);
          return !["P", "W", "I", "S", "U", "W"].includes(item.grade)
            ? total + credit
            : total + 0;
        },
        0
      );

      const totalCumGradePointAvgCredit = [
        ...studentGrades,
        ...selectedSimCourses,
      ].reduce((total, item) => {
        const credit = !isNaN(item.credit)
          ? item.credit
          : parseFloat(item.credit[0]);
        const gradeValue = gradeMap[item.grade];
        return !["P", "W", "I", "S", "U", "W"].includes(item.grade)
          ? total + credit * gradeValue
          : total + 0;
      }, 0);

      const semGpa = ParseFloat(
        totalCumGradePointAvgCredit / totalCumCredit,
        2
      );

      setSimCumResult({
        totalCumCredit: totalCumCredit,
        totalCumGradePointAvgCredit: totalCumGradePointAvgCredit,
        semGpa: semGpa,
      });

      const simSemArr = dropdownList.map((item) => {
        return {
          eduTerm: item.eduTerm,
          eduYear: item.eduYear,
          totalCumCredit: 0,
          totalCumGradePointAvgCredit: 0,
          semGpa: 0,
          cumGpa: 0,
        };
      });

      [...studentGrades, ...selectedSimCourses].forEach((course) => {
        const index = simSemArr.findIndex(
          (item) =>
            parseInt(item.eduTerm) == parseInt(course.eduTerm) &&
            parseInt(item.eduYear) == parseInt(course.eduYear)
        );

        if (index !== -1) {
          const credit = !isNaN(course.credit)
            ? course.credit
            : parseFloat(course.credit[0]);
          const gradeValue = gradeMap[course.grade];

          simSemArr[index].totalCumCredit += ![
            "P",
            "W",
            "I",
            "S",
            "U",
            "W",
          ].includes(course.grade)
            ? credit
            : 0;
          simSemArr[index].totalCumGradePointAvgCredit += ![
            "P",
            "W",
            "I",
            "S",
            "U",
            "W",
          ].includes(course.grade)
            ? credit * gradeValue
            : 0;
          simSemArr[index].semGpa = ParseFloat(
            simSemArr[index].totalCumGradePointAvgCredit /
              simSemArr[index].totalCumCredit,
            2
          );
        }
      });

      let cumulativeCredits = 0;
      let cumulativeGradePoints = 0;

      simSemArr.forEach((semester, index) => {
        cumulativeCredits += semester.totalCumCredit;
        cumulativeGradePoints += semester.totalCumGradePointAvgCredit;

        if (cumulativeCredits > 0) {
          semester.cumGpa = ParseFloat(
            cumulativeGradePoints / cumulativeCredits,
            2
          );
        } else {
          semester.cumGpa = 0;
        }
      });

      setSimSemResult(simSemArr);
      setLoading(false);
      console.log(loading);
    }, 2000);
  };

  const getPercentage = (currGpa, prevCumGpa) => {
    const difference = currGpa - prevCumGpa;
    const percentageChange = (difference / prevCumGpa) * 100;
    const roundedPercentage = ParseFloat(percentageChange, 2);
    return roundedPercentage >= 0
      ? `+${roundedPercentage}%`
      : `${roundedPercentage}%`;
  };

  const getDachanee = (currGpa, prevCumGpa) => {
    return ((currGpa - prevCumGpa) / prevCumGpa) * 100;
  };

  useEffect(() => {
    if (
      dropdownList.find(
        (item) =>
          item.eduTerm == filterEnrollments.eduTerm &&
          item.eduYear == filterEnrollments.eduYear
      ).isSim
    ) {
      setCurrentSimTermYear({
        eduTerm: filterEnrollments.eduTerm,
        eduYear: filterEnrollments.eduYear,
      });
    }
  }, [filterEnrollments]);

  useEffect(() => {
    setFilterEnrollments(
      semesterType === "ลงทะเบียนแล้ว" ? dropdownList[0] : dropdownList[3]
    );
  }, [semesterType]);

  return (
    <>
      <SimulatingStudyModal
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        courses={courses}
        categories={categories}
        selectedSimCourses={selectedSimCourses}
        setSelectedSimCourses={setSelectedSimCourses}
        currentSimTermYear={currentSimTermYear}
      />
      <div className=" grid grid-cols-3 mb-3">
        <div>
          <h5 className="text-3xl font-bold text-gray-900 dark:text-white">
            จำลองผลการเรียน
          </h5>
        </div>
        <div className=" flex flex-row gap-3 items-center justify-center">
          <div className=" flex flex-row items-center gap-3">
            <p>ภาคการศึกษาที่</p>
            <Dropdown color="light" label={semesterType}>
              <Dropdown.Item onClick={() => setSemesterType("ลงทะเบียนแล้ว")}>
                ลงทะเบียนแล้ว
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSemesterType("ยังไม่ลงทะเบียน")}>
                ยังไม่ลงทะเบียน
              </Dropdown.Item>
            </Dropdown>
          </div>
        </div>
        <div className=" flex justify-end ">
          <div className=" flex flex-row items-center gap-3">
            <p>เทอม/ชั้นปีที่</p>
            <Dropdown
              color="light"
              label={`${filterEnrollments.eduTerm}/${filterEnrollments.eduYear}`}
            >
              {/* already enrolled */}
              {dropdownList
                .filter((item) =>
                  semesterType == "ลงทะเบียนแล้ว" ? !item.isSim : item.isSim
                )
                .map((item) => (
                  <Dropdown.Item
                    color="dark"
                    className={
                      item.eduTerm == filterEnrollments.eduTerm &&
                      item.eduYear == filterEnrollments.eduYear
                        ? " bg-gray-100"
                        : ""
                    }
                    onClick={() =>
                      setFilterEnrollments({
                        eduTerm: item.eduTerm,
                        eduYear: item.eduYear,
                      })
                    }
                  >
                    {item.eduTerm}/{item.eduYear}
                  </Dropdown.Item>
                ))}
            </Dropdown>
          </div>
        </div>
      </div>

      {studentEnrolls && studentGrades && (
        <>
          {semesterType === "ลงทะเบียนแล้ว" ? (
            <>
              <Table>
                <Table.Head>
                  <Table.HeadCell>รหัสวิชา</Table.HeadCell>
                  <Table.HeadCell>ชื่อวิชา</Table.HeadCell>
                  <Table.HeadCell>หน่วยกิต</Table.HeadCell>
                  <Table.HeadCell>ระดับขั้น</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  {studentEnrolls
                    .filter(
                      (item) =>
                        item.eduTerm == filterEnrollments.eduTerm &&
                        item.eduYear == filterEnrollments.eduYear
                    )
                    .map((item) => (
                      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell>{item.subjectCode}</Table.Cell>
                        <Table.Cell>{item.subjectNameThai}</Table.Cell>
                        <Table.Cell>{item.registCredit}</Table.Cell>
                        <Table.Cell>
                          {
                            studentGrades.find(
                              (x) => x.subjectCode == item.subjectCode
                            )?.grade
                          }
                        </Table.Cell>
                      </Table.Row>
                    ))}
                </Table.Body>
              </Table>
            </>
          ) : (
            <>
              <div className=" grid grid-cols-4 gap-3">
                <Alert
                  className={
                    filterEnrollments.eduTerm ==
                      dropdownList[dropdownList.length - 1].eduTerm &&
                    filterEnrollments.eduYear ==
                      dropdownList[dropdownList.length - 1].eduYear
                      ? "mb-3 col-span-3"
                      : "mb-3 col-span-4"
                  }
                  color="info"
                  icon={HiInformationCircle}
                >
                  *ข้อมูลต่อไปนี้เป็นข้อมูลประมาณเท่านั้น จะต้องตรวจสอบอีกครั้ง*
                  สามารถค้นหาข้อมูลเพิ่มเติมได้ที่ https://sis.psu.ac.th/
                </Alert>
                {filterEnrollments.eduTerm ==
                  dropdownList[dropdownList.length - 1].eduTerm &&
                filterEnrollments.eduYear ==
                  dropdownList[dropdownList.length - 1].eduYear ? (
                  <>
                    <Button
                      color="light"
                      className=" mb-3 flex justify-center items-center"
                      onClick={() => {
                        const nextEduTerm = getNextEdutermAndEduYear(
                          dropdownList[dropdownList.length - 1].eduTerm,
                          dropdownList[dropdownList.length - 1].eduYear
                        ).eduTerm;
                        const nextEduYear = getNextEdutermAndEduYear(
                          dropdownList[dropdownList.length - 1].eduTerm,
                          dropdownList[dropdownList.length - 1].eduYear
                        ).eduYear;
                        setDropdownList((prevState) => [
                          ...prevState,
                          {
                            eduTerm: nextEduTerm,
                            eduYear: nextEduYear,
                            isSim: true,
                          },
                        ]);
                        setFilterEnrollments({
                          eduTerm: nextEduTerm,
                          eduYear: nextEduYear,
                        });
                      }}
                    >
                      จำลองเทอมถัดไป
                      <HiOutlineArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </>
                ) : (
                  <></>
                )}
              </div>
              <Table>
                <Table.Head>
                  <Table.HeadCell>รหัสวิชา</Table.HeadCell>
                  <Table.HeadCell>ชื่อวิชา</Table.HeadCell>
                  <Table.HeadCell>หน่วยกิต</Table.HeadCell>
                  <Table.HeadCell>ระดับขั้น</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  {selectedSimCourses
                    .filter(
                      (item) =>
                        item.eduTerm == filterEnrollments.eduTerm &&
                        item.eduYear == filterEnrollments.eduYear
                    )
                    .map((item) => (
                      <>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>{item.courseCode}</Table.Cell>
                          <Table.Cell>{item.courseNameThai}</Table.Cell>
                          <Table.Cell>{item.credit[0]}</Table.Cell>
                          <Table.Cell>
                            <Select
                              onChange={(e) =>
                                setSelectedSimCourses((prevState) =>
                                  [...prevState].map((course) =>
                                    course.courseCode == item.courseCode
                                      ? { ...course, grade: e.target.value }
                                      : course
                                  )
                                )
                              }
                            >
                              <option value="A">A</option>
                              <option value="B+">B+</option>
                              <option value="B">B</option>
                              <option value="C+">C+</option>
                              <option value="C">C</option>
                              <option value="D+">D+</option>
                              <option value="D">D</option>
                              <option value="E">E</option>
                              <option value="I">I</option>
                              <option value="S">S</option>
                              <option value="U">U</option>
                              <option value="W">W</option>
                              <option value="P">P</option>
                            </Select>
                          </Table.Cell>
                        </Table.Row>
                      </>
                    ))}
                  <Table.Row>
                    <Table.Cell colSpan={1}>
                      <Button
                        className=" bg-green-2"
                        onClick={() => setIsOpenModal(true)}
                      >
                        เพิ่มรายวิชา+
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
              <div className=" grid grid-cols-1">
                <div>
                  <Button
                    onClick={calcSimulatingGrade}
                    // disabled={!selectedSimCourses.length}
                    className=" bg-blue-green1 hover:bg-blue-green2 my-5 flex justify-center items-center text-center"
                    style={{ width: "100%", height: "70%" }}
                  >
                    <PlayArrowOutlined />
                    เริ่มจำลองผลการเรียน
                  </Button>
                </div>
              </div>
            </>
          )}
          {isStartSim && !loading ? (
            <>
              <div className=" grid grid-cols-2 my-3 gap-3">
                <div>
                  <Card>
                    <h1 className=" font-semibold">เกรด</h1>
                    <Line
                      options={{
                        plugins: {
                          legend: { display: false },
                        },
                        scales: {
                          y: {
                            suggestedMax: 4,
                          },
                        },
                      }}
                      data={{
                        labels: dropdownList.map(
                          (item) => `${item.eduTerm}/${item.eduYear}`
                        ),
                        datasets: [
                          {
                            label: "GPA",
                            data: simSemResult.map((item) => item.semGpa),
                            backgroundColor: "#5FBE97",
                          },
                        ],
                      }}
                    />
                  </Card>
                </div>
                <div>
                  <Card style={{ height: "100%" }} className=" text-center">
                    <div className="border-b">
                      <h5 className="text-2xl font-semibold text-gray-900 dark:text-white mb-1">
                        ดัชนีการเปลี่ยนแปลง (%)
                      </h5>

                      {getDachanee(
                        simSemResult[simSemResult.length - 1].semGpa,
                        simSemResult[simSemResult.length - 2].cumGpa
                      ) >= 3 && (
                        <SentimentSatisfiedAltIcon
                          className="mb-1"
                          style={{ fontSize: "64px", color: "#3EA37E" }}
                        />
                      )}
                      {getDachanee(
                        simSemResult[simSemResult.length - 1].semGpa,
                        simSemResult[simSemResult.length - 2].cumGpa
                      ) < 3 &&
                        getDachanee(
                          simSemResult[simSemResult.length - 1].semGpa,
                          simSemResult[simSemResult.length - 2].cumGpa
                        ) >= -10 && (
                          <SentimentSatisfiedIcon
                            className="mb-1"
                            style={{
                              fontSize: "64px",
                              color: "rgb(250 202 21)",
                            }}
                          />
                        )}
                      {getDachanee(
                        simSemResult[simSemResult.length - 1].semGpa,
                        simSemResult[simSemResult.length - 2].cumGpa
                      ) < -10 && (
                        <SentimentDissatisfiedIcon
                          className="mb-1"
                          style={{ fontSize: "64px", color: "#DE7A6C" }}
                        />
                      )}

                      <div className="flex justify-center mb-1">
                        <Button
                          className={
                            getDachanee(
                              simSemResult[simSemResult.length - 1].semGpa,
                              simSemResult[simSemResult.length - 2].cumGpa
                            ) >= 3
                              ? `bg-gradient-to-r from-green-1 to-green-2 size`
                              : getDachanee(
                                  simSemResult[simSemResult.length - 1].semGpa,
                                  simSemResult[simSemResult.length - 2].cumGpa
                                ) < 3 &&
                                getDachanee(
                                  simSemResult[simSemResult.length - 1].semGpa,
                                  simSemResult[simSemResult.length - 2].cumGpa
                                ) >= -10
                              ? ` bg-yellow-300 size`
                              : `bg-gradient-to-r from-red-1 to-red-2 size`
                          }
                        >
                          {getPercentage(
                            simSemResult[simSemResult.length - 1].semGpa,
                            simSemResult[simSemResult.length - 2].cumGpa
                          )}
                        </Button>
                      </div>
                      <p className="mb-1 text-sm text-gray-800">
                        {getDachanee(
                          simSemResult[simSemResult.length - 1].semGpa,
                          simSemResult[simSemResult.length - 2].cumGpa
                        ) >= 3 && `ดัชนีการเปลี่ยนแปลงของท่านอยู่ในเกณฑ์ที่ดี`}
                        {getDachanee(
                          simSemResult[simSemResult.length - 1].semGpa,
                          simSemResult[simSemResult.length - 2].cumGpa
                        ) < 3 &&
                          getDachanee(
                            simSemResult[simSemResult.length - 1].semGpa,
                            simSemResult[simSemResult.length - 2].cumGpa
                          ) >= -10 &&
                          `ดัชนีการเปลี่ยนแปลงของท่านอยู่ในเกณฑ์ปานกลาง`}
                        {getDachanee(
                          simSemResult[simSemResult.length - 1].semGpa,
                          simSemResult[simSemResult.length - 2].cumGpa
                        ) < -10 &&
                          `ดัชนีการเปลี่ยนแปลงของท่านอยู่ในเกณฑ์ที่ควรปรับปรุง`}
                      </p>
                    </div>
                    <h5 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      สรุปสะสม (Cumulative){" "}
                    </h5>
                    <div>
                      <div className=" grid grid-cols-2">
                        <div className=" flex justify-start ml-6 font-light">
                          <p>หน่วยกิตที่ลงทะเบียน</p>
                        </div>
                        <div className=" flex justify-end mr-6 font-light">
                          <p>{simCumResult.totalCumCredit}</p>
                        </div>
                      </div>
                      <div className=" grid grid-cols-2">
                        <div className=" flex justify-start ml-6">
                          <p className=" font-light">จำนวนหน่วยจุด</p>
                        </div>
                        <div className=" flex justify-end mr-6 font-light">
                          <p>{simCumResult.totalCumGradePointAvgCredit}</p>
                        </div>
                      </div>
                      <div className=" grid grid-cols-2">
                        <div className=" flex justify-start ml-6">
                          <p className=" font-bold">ผลการเรียนเฉลี่ย</p>
                        </div>
                        <div className=" flex justify-end mr-6">
                          <p className=" font-bold">{simCumResult.semGpa}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
              {/* <div className=" grid grid-cols-4">
                <div className=" col-start-2 col-span-2">
                  <Card>
                    <div>
                      <h5 className=" font-semibold">
                        สรุประดับภาคการศึกษา (Semester)
                      </h5>
                    </div>
                  </Card>
                </div>
              </div> */}
            </>
          ) : (
            isStartSim && (
              <>
                <div className=" mt-3 items-center flex justify-center">
                  <Spinner size="xl" />
                </div>
              </>
            )
          )}
        </>
      )}
    </>
  );
}
