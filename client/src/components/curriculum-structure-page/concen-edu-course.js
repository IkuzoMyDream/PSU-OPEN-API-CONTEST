import { Accordion } from "flowbite-react";
import CourseList from "./course-list";

export default function ConcenEduCourse({
  concentrationCourse,
  studentConcenEnroll,
}) {
  return (
    <>
      <p className=" text-2xl">
        หมวดวิชาเฉพาะ ({studentConcenEnroll?.registCreditAmount} /{" "}
        {concentrationCourse?.totalCredit})
      </p>
      <div className=" indent-8 my-3"></div>
      <Accordion alwaysOpen collapseAll>
        <Accordion.Panel>
          <Accordion.Title>
            กลุ่มพื้นฐานวิชาชีพ (
            {studentConcenEnroll?.basicConcen?.registCreditAmount} /{" "}
            {concentrationCourse?.basicConcen?.totalCredit})
          </Accordion.Title>
          <Accordion.Content>
            <CourseList
              courseList={concentrationCourse?.basicConcen}
              enrollList={studentConcenEnroll?.basicConcen?.registCourseIds}
            />
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            กลุ่มวิชาชีพ (
            {studentConcenEnroll?.advanceConcen?.registCreditAmount} /{" "}
            {concentrationCourse?.advanceConcen?.totalCredit})
          </Accordion.Title>
          <Accordion.Content>
            <CourseList
              courseList={concentrationCourse?.advanceConcen}
              enrollList={studentConcenEnroll?.advanceConcen?.registCourseIds}
            />
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </>
  );
}
