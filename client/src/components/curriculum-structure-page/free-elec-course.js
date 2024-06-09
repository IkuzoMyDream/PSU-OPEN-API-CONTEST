import { Accordion, Card } from "flowbite-react";
import { FaCheck } from "react-icons/fa";

export default function FreeElecCourse({
  freeElecCourse,
  studentFreeElecEnroll,
  filterCurriculumCourse,
  freecourse,
}) {
  const isEnrolled = (courseCode, enrollList) => {
    return enrollList.includes(courseCode);
  };

  return (
    <>
      <p className=" text-xl">
        หมวดวิชาเลือกเสรี ({studentFreeElecEnroll?.registCreditAmount} /{" "}
        {freeElecCourse?.totalCredit}) หน่วยกิต
      </p>
      <div className=" indent-8 my-3"></div>
      <div className=" indent-8">
        <p>{freeElecCourse?.desc}</p>
      </div>
      <Accordion alwaysOpen collapseAll style={{ backgroundColor: "white" }}>
        <Accordion.Panel>
          <Accordion.Title>
            หมวดวิชาเลือกเสรี ({studentFreeElecEnroll?.registCreditAmount} /{" "}
            {freeElecCourse?.totalCredit}) หน่วยกิต
          </Accordion.Title>
          <Accordion.Content>
            {Object.values(freecourse).map((course) => (
              <Card
                className="my-3 bg-pale-blue-gray relative"
                key={course.courseCode}
              >
                <div className="grid grid-cols-2">
                  <div>
                    {course.courseCode} {course.courseNameThai}{" "}
                    {course.credit ? course.credit : "x(y-y-y)"}{" "}
                  </div>
                  <div className="flex justify-end">
                    {isEnrolled(
                      course.courseCode,
                      studentFreeElecEnroll?.registCourseIds
                    ) ? (
                      <>
                        <p>
                          ผลการเรียน :{" "}
                          {["A", "B+", "B"][Math.floor(Math.random() * 3)]}
                        </p>
                        <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
                          <div className="w-8 h-8 rounded-full bg-green-300 border-4 border-white flex items-center justify-center">
                            <FaCheck className="text-white" />
                          </div>
                        </div>
                      </>
                    ) : (
                      "ยังไม่ได้ลงทะเบียน"
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </>
  );
}
