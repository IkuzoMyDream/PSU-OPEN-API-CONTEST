import { Accordion, Card, Dropdown } from "flowbite-react";
import CurriculumAccordionContent from "./curriculum-accordion.content";

export default function GeEduCourse({
  geEduCourse,
  studentGeEnroll,
  filterCurriculumCourse,
  setFilterCurriculumCourse,
}) {
  console.log("studen = ", studentGeEnroll);
  console.log("teajkfnajf = ", geEduCourse);
  return (
    <>
      <div className=" grid grid-cols-2">
        <p className=" text-xl">
          หมวดวิชาศึกษาทั่วไป ({studentGeEnroll?.registCreditAmount} /{" "}
          {parseInt(geEduCourse?.totalCredit) +
            parseInt(geEduCourse?.elecEduCourse.totalCredit)}
          ) หน่วยกิต
        </p>
        <div className=" flex justify-end">
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
        </div>
      </div>
      <div className=" indent-8 my-3"></div>
      <Accordion alwaysOpen style={{ backgroundColor: "white" }}>
        <Accordion.Panel>
          <Accordion.Title>
            สาระที่ 1 ศาสตร์พระราชาและประโยชน์เพื่อนมนุษย์ (
            {studentGeEnroll?.subjGroup01.registCreditAmount} /{" "}
            {geEduCourse?.subjGroup01?.totalCredit}) หน่วยกิต
          </Accordion.Title>
          <Accordion.Content>
            <CurriculumAccordionContent
              courseObj={geEduCourse?.subjGroup01}
              enrollList={studentGeEnroll?.subjGroup01?.registCourseIds}
              filterCurriculumCourse={filterCurriculumCourse}
            />
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            สาระที่ 2 ความเป็นพลเมืองและชีวิตที่สันติ (
            {studentGeEnroll?.subjGroup02.registCreditAmount} /{" "}
            {geEduCourse?.subjGroup02?.totalCredit}) หน่วยกิต
          </Accordion.Title>
          <Accordion.Content>
            <CurriculumAccordionContent
              courseObj={geEduCourse?.subjGroup02}
              enrollList={studentGeEnroll?.subjGroup02?.registCourseIds}
              filterCurriculumCourse={filterCurriculumCourse}
            />
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            สาระที่ 3 การเป็นผู้ประกอบการ (
            {studentGeEnroll?.subjGroup03.registCreditAmount} /{" "}
            {geEduCourse?.subjGroup03?.totalCredit}) หน่วยกิต
          </Accordion.Title>
          <Accordion.Content>
            <CurriculumAccordionContent
              courseObj={geEduCourse?.subjGroup03}
              enrollList={studentGeEnroll?.subjGroup03?.registCourseIds}
              filterCurriculumCourse={filterCurriculumCourse}
            />
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            สาระที่ 4 การอยู่อย่างรู้เท่าทัน และการรู้ดิจิทัล (
            {studentGeEnroll?.subjGroup04.registCreditAmount} /{" "}
            {geEduCourse?.subjGroup04?.totalCredit}) หน่วยกิต
          </Accordion.Title>
          <Accordion.Content>
            <CurriculumAccordionContent
              courseObj={geEduCourse?.subjGroup04}
              enrollList={studentGeEnroll?.subjGroup04?.registCourseIds}
              filterCurriculumCourse={filterCurriculumCourse}
            />
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            สาระที่ 5 การคิดเชิงระบบตรรกะและตัวเลข (
            {studentGeEnroll?.subjGroup05.registCreditAmount} /{" "}
            {geEduCourse?.subjGroup05?.totalCredit}) หน่วยกิต
          </Accordion.Title>
          <Accordion.Content>
            <CurriculumAccordionContent
              courseObj={geEduCourse?.subjGroup05}
              enrollList={studentGeEnroll?.subjGroup05?.registCourseIds}
              filterCurriculumCourse={filterCurriculumCourse}
            />
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            สาระที่ 6 ภาษาและการสื่อสาร (
            {studentGeEnroll?.subjGroup06.registCreditAmount} /{" "}
            {geEduCourse?.subjGroup06?.totalCredit}) หน่วยกิต
          </Accordion.Title>
          <Accordion.Content>
            <CurriculumAccordionContent
              courseObj={geEduCourse?.subjGroup06}
              enrollList={studentGeEnroll?.subjGroup06?.registCourseIds}
              filterCurriculumCourse={filterCurriculumCourse}
            />
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            สาระที่ 7 สุนทรียศาสตร์และกีฬา (
            {studentGeEnroll?.subjGroup07.registCreditAmount} /{" "}
            {geEduCourse?.subjGroup07?.totalCredit}) หน่วยกิต
          </Accordion.Title>
          <Accordion.Content>
            <CurriculumAccordionContent
              courseObj={geEduCourse?.subjGroup07}
              enrollList={studentGeEnroll?.subjGroup07?.registCourseIds}
              filterCurriculumCourse={filterCurriculumCourse}
            />
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            วิชาเลือก ({studentGeEnroll?.elecEduCourse.registCreditAmount} /{" "}
            {geEduCourse?.elecEduCourse?.totalCredit}) หน่วยกิต
          </Accordion.Title>
          <Accordion.Content>
            <CurriculumAccordionContent
              courseObj={geEduCourse?.elecEduCourse}
              enrollList={studentGeEnroll?.elecEduCourse?.registCourseIds}
              filterCurriculumCourse={filterCurriculumCourse}
            />
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </>
  );
}
