import { useEffect, useState } from "react";
import FreeElecCourse from "./free-elec-course";
import ConcenEduCourse from "./concen-edu-course";
import GeEduCourse from "./ge-edu-course";
import { Dropdown } from "flowbite-react";
import { HiInformationCircle, HiOutlineArrowRight } from "react-icons/hi";
import { Alert } from "flowbite-react";

export default function CorriculumStructure({
  curriculumStructure,
  studentEnroll,
  freeCourse,
}) {
  const [geEduCourse, setGeEduCourse] = useState(null);
  const [concentrationCourse, setConcentrationCourse] = useState(null);
  const [freeElecCourse, setFreeElecCourse] = useState(null);

  const [studentGeEnroll, setStudentGeEnroll] = useState(null);
  const [studentConcenEnroll, setStudentConcenEnroll] = useState(null);
  const [studentFreeElecEnroll, setStudentFreeElecEnroll] = useState(null);

  const [filterCurriculumCourse, setFilterCurriculumCourse] =
    useState(`แสดงรายวิชาทั้งหมด`);

  useEffect(() => {
    setGeEduCourse({
      ...curriculumStructure?.geEduCourse?.requiredEduCourse,
      elecEduCourse: curriculumStructure?.geEduCourse?.elecEduCourse,
    });
    setConcentrationCourse({
      totalCredit: curriculumStructure?.concentrationCourse.totalCredit,
      basicConcen: curriculumStructure?.concentrationCourse.groups[0],
      advanceConcen: curriculumStructure?.concentrationCourse.groups[1],
    });
    setFreeElecCourse({
      ...curriculumStructure?.freeElecCourse,
    });
  }, [curriculumStructure]);

  useEffect(() => {
    setStudentGeEnroll(studentEnroll?.geEduCourse);
    setStudentConcenEnroll(studentEnroll?.concentrationCourse);
    setStudentFreeElecEnroll(studentEnroll?.freeElecCourse);
  }, [studentEnroll]);

  return (
    <>
      <div>
        {/* <div className="grid grid-cols-2"> */}
        {/* <Alert color="info" icon={HiInformationCircle}>
            *ข้อมูลต่อไปนี้เป็นข้อมูลประมาณเท่านั้น จะต้องตรวจสอบอีกครั้ง*
          </Alert> */}
        {/* <div></div> */}
        {/* <div className="flex justify-end">
            <Dropdown label={filterCurriculumCourse}>
              <Dropdown.Item
                onClick={() => setFilterCurriculumCourse(`แสดงรายวิชาทั้งหมด`)}
              >
                แสดงรายวิชาทั้งหมด
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() =>
                  setFilterCurriculumCourse(`แสดงรายวิชาที่ลงทะเบียนแล้ว`)
                }
              >
                แสดงรายวิชาที่ลงทะเบียนแล้ว
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() =>
                  setFilterCurriculumCourse(`แสดงรายวิชาที่ยังไม่ลงทะเบียน`)
                }
              >
                แสดงรายวิชาที่ยังไม่ลงทะเบียน
              </Dropdown.Item>
            </Dropdown>
          </div> */}
        {/* </div> */}
        <div className=" my-3">
          <GeEduCourse
            studentGeEnroll={studentGeEnroll}
            geEduCourse={geEduCourse}
            filterCurriculumCourse={filterCurriculumCourse}
            setFilterCurriculumCourse={setFilterCurriculumCourse}
          />
        </div>
        <div className=" my-12">
          <ConcenEduCourse
            studentConcenEnroll={studentConcenEnroll}
            concentrationCourse={concentrationCourse}
            filterCurriculumCourse={filterCurriculumCourse}
          />
        </div>
        <div className=" my-12">
          <FreeElecCourse
            studentFreeElecEnroll={studentFreeElecEnroll}
            freeElecCourse={freeElecCourse}
            filterCurriculumCourse={filterCurriculumCourse}
            freecourse={freeCourse}
          />
        </div>
      </div>
    </>
  );
}
