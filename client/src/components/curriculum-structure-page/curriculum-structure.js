import { useEffect, useState } from "react";
import FreeElecCourse from "./free-elec-course";
import ConcenEduCourse from "./concen-edu-course";
import GeEduCourse from "./ge-edu-course";

export default function CorriculumStructure({
  curriculumStructure,
  studentEnroll,
}) {
  const [geEduCourse, setGeEduCourse] = useState(null);
  const [concentrationCourse, setConcentrationCourse] = useState(null);
  const [freeElecCourse, setFreeElecCourse] = useState(null);

  const [studentGeEnroll, setStudentGeEnroll] = useState(null);
  const [studentConcenEnroll, setStudentConcenEnroll] = useState(null);
  const [studentFreeElecEnroll, setStudentFreeElecEnroll] = useState(null);

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
    // console.log(geEduCourse);
  }, [geEduCourse, concentrationCourse, freeElecCourse]);

  useEffect(() => {
    setStudentGeEnroll(studentEnroll?.geEduCourse);
    setStudentConcenEnroll(studentEnroll?.concentrationCourse);
    setStudentFreeElecEnroll(studentEnroll?.freeElecCourse);
  }, [studentEnroll]);

  return (
    <>
      <div>
        <p className=" text-sm my-3">
          หมายเหตุ *ข้อมูลต่อไปนี้เป็นข้อมูลประมาณเท่านั้น
          จะต้องตรวจสอบอีกครั้ง*
        </p>
        <div className=" my-3">
          <GeEduCourse
            studentGeEnroll={studentGeEnroll}
            geEduCourse={geEduCourse}
          />
        </div>
        <div className=" my-3">
          <ConcenEduCourse
            studentConcenEnroll={studentConcenEnroll}
            concentrationCourse={concentrationCourse}
          />
        </div>
        <div className=" my-3">
          <FreeElecCourse
            studentFreeElecEnroll={studentFreeElecEnroll}
            freeElecCourse={freeElecCourse}
          />
        </div>
      </div>
    </>
  );
}
