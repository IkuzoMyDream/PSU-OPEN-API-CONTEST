import { Accordion, Card } from "flowbite-react";
import CourseList from "./course-list";

export default function GeEduCourse({ geEduCourse, studentGeEnroll }) {
  return (
    <>
      <p className=" text-2xl">
        หมวดวิชาศึกษาทั่วไป ({studentGeEnroll?.registCreditAmount} /{" "}
        {geEduCourse?.totalCredit})
      </p>
      <div className=" indent-8 my-3"></div>
      <Accordion alwaysOpen>
        <Accordion.Panel>
          <Accordion.Title>
            สาระที่ 1 ศาสตร์พระราชาและประโยชน์เพื่อนมนุษย์ (
            {studentGeEnroll?.subjGroup01.registCreditAmount} /{" "}
            {geEduCourse?.subjGroup01?.totalCredit})
          </Accordion.Title>
          <Accordion.Content>
            <CourseList
              courseList={geEduCourse?.subjGroup01}
              enrollList={studentGeEnroll?.subjGroup01?.registCourseIds}
            />
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            สาระที่ 2 ความเป็นพลเมืองและชีวิตที่สันติ (
            {studentGeEnroll?.subjGroup02.registCreditAmount} /{" "}
            {geEduCourse?.subjGroup02?.totalCredit})
          </Accordion.Title>
          <Accordion.Content>
            <CourseList
              courseList={geEduCourse?.subjGroup02}
              enrollList={studentGeEnroll?.subjGroup02?.registCourseIds}
            />
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            สาระที่ 3 การเป็นผู้ประกอบการ (
            {studentGeEnroll?.subjGroup03.registCreditAmount} /{" "}
            {geEduCourse?.subjGroup03?.totalCredit})
          </Accordion.Title>
          <Accordion.Content>
            <CourseList
              courseList={geEduCourse?.subjGroup03}
              enrollList={studentGeEnroll?.subjGroup03?.registCourseIds}
            />
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            สาระที่ 4 การอยู่อย่างรู้เท่าทัน และการรู้ดิจิทัล (
            {studentGeEnroll?.subjGroup04.registCreditAmount} /{" "}
            {geEduCourse?.subjGroup04?.totalCredit})
          </Accordion.Title>
          <Accordion.Content>
            <CourseList
              courseList={geEduCourse?.subjGroup04}
              enrollList={studentGeEnroll?.subjGroup04?.registCourseIds}
            />
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            สาระที่ 5 การคิดเชิงระบบตรรกะและตัวเลข (
            {studentGeEnroll?.subjGroup05.registCreditAmount} /{" "}
            {geEduCourse?.subjGroup05?.totalCredit})
          </Accordion.Title>
          <Accordion.Content>
            <CourseList
              courseList={geEduCourse?.subjGroup05}
              enrollList={studentGeEnroll?.subjGroup05?.registCourseIds}
            />
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            สาระที่ 6 ภาษาและการสื่อสาร (
            {studentGeEnroll?.subjGroup06.registCreditAmount} /{" "}
            {geEduCourse?.subjGroup06?.totalCredit})
          </Accordion.Title>
          <Accordion.Content>
            <CourseList
              courseList={geEduCourse?.subjGroup06}
              enrollList={studentGeEnroll?.subjGroup06?.registCourseIds}
            />
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            สาระที่ 7 สุนทรียศาสตร์และกีฬา (
            {studentGeEnroll?.subjGroup07.registCreditAmount} /{" "}
            {geEduCourse?.subjGroup07?.totalCredit})
          </Accordion.Title>
          <Accordion.Content>
            <CourseList
              courseList={geEduCourse?.subjGroup07}
              enrollList={studentGeEnroll?.subjGroup07?.registCourseIds}
            />
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            วิชาเลือก ({studentGeEnroll?.elecEduCourse.registCreditAmount} /{" "}
            {geEduCourse?.elecEduCourse?.totalCredit})
          </Accordion.Title>
          <Accordion.Content>
            <CourseList
              courseList={geEduCourse?.elecEduCourse}
              enrollList={studentGeEnroll?.elecEduCourse?.registCourseIds}
            />
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </>
  );
}
