import { Accordion } from "flowbite-react";
import CourseList from "./course-obj";
import CurriculumAccordionContent from "./curriculum-accordion.content";

export default function ConcenEduCourse({
  concentrationCourse,
  studentConcenEnroll,
  filterCurriculumCourse,
}) {
  return (
    <>
      <p className=" text-2xl">
        หมวดวิชาเฉพาะ ({studentConcenEnroll?.registCreditAmount} /{" "}
        {concentrationCourse?.totalCredit}) หน่วยกิต
      </p>
      <div className=" indent-8 my-3"></div>
      <Accordion alwaysOpen collapseAll>
        <Accordion.Panel>
          <Accordion.Title>
            กลุ่มพื้นฐานวิชาชีพ (
            {studentConcenEnroll?.basicConcen?.registCreditAmount} /{" "}
            {concentrationCourse?.basicConcen?.totalCredit}) หน่วยกิต
          </Accordion.Title>
          <Accordion.Content>
            <CurriculumAccordionContent
              courseObj={concentrationCourse?.basicConcen}
              enrollList={studentConcenEnroll?.basicConcen?.registCourseIds}
              filterCurriculumCourse={filterCurriculumCourse}
            />
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            กลุ่มวิชาชีพ (
            {studentConcenEnroll?.advanceConcen?.registCreditAmount} /{" "}
            {concentrationCourse?.advanceConcen?.totalCredit}) หน่วยกิต
          </Accordion.Title>
          <Accordion.Content>
            <CurriculumAccordionContent
              courseObj={concentrationCourse?.advanceConcen}
              enrollList={studentConcenEnroll?.advanceConcen?.registCourseIds}
              filterCurriculumCourse={filterCurriculumCourse}
            />
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </>
  );
}
