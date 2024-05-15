import { useEffect, useState } from "react";
import CourseObj from "./course-obj";

export default function CurriculumAccordionContent({
  courseObj,
  enrollList,
  filterCurriculumCourse,
}) {
  const [filteredCourseObj, setFilteredCourseObj] = useState(null);

  useEffect(() => {
    if (courseObj?.courses) {
      let filteredCourses = [];
      let sortedCourses = [];
      switch (filterCurriculumCourse) {
        case `แสดงรายวิชาทั้งหมด`:
          sortedCourses = courseObj.courses.sort(
            (a, b) =>
              enrollList.includes(b.coursecode) -
              enrollList.includes(a.courseCode)
          );
          setFilteredCourseObj({
            ...courseObj,
            courses: sortedCourses,
          });
          break;
        case `แสดงรายวิชาที่ลงทะเบียนแล้ว`:
          if (courseObj?.courses) {
            filteredCourses = courseObj.courses.filter((course) =>
              enrollList.includes(course.courseCode)
            );
          }
          setFilteredCourseObj({
            ...courseObj,
            courses: filteredCourses,
          });
          break;
        case `แสดงรายวิชาที่ยังไม่ลงทะเบียน`:
          if (courseObj?.courses) {
            filteredCourses = courseObj.courses.filter(
              (course) => !enrollList.includes(course.courseCode)
            );
          }
          setFilteredCourseObj({
            ...courseObj,
            courses: filteredCourses,
          });
          break;
      }
    } else if (courseObj?.groups) {
      let filteredCourseGroups = [];
      switch (filterCurriculumCourse) {
        case `แสดงรายวิชาทั้งหมด`:
          setFilteredCourseObj(courseObj);
          break;
        case `แสดงรายวิชาที่ลงทะเบียนแล้ว`:
          filteredCourseGroups = courseObj.groups.map((group) => {
            return {
              ...group,
              courses: group.courses
                ? group.courses.filter((coure) =>
                    enrollList.includes(coure.courseCode)
                  )
                : [],
            };
          });
          setFilteredCourseObj({
            ...courseObj,
            groups: filteredCourseGroups,
          });
          break;
        case `แสดงรายวิชาที่ยังไม่ลงทะเบียน`:
          filteredCourseGroups = courseObj.groups.map((group) => {
            return {
              ...group,
              courses: group.courses
                ? group.courses.filter(
                    (coure) => !enrollList.includes(coure.courseCode)
                  )
                : [],
            };
          });
          setFilteredCourseObj({
            ...courseObj,
            groups: filteredCourseGroups,
          });
          break;
      }
    }
  }, [courseObj, enrollList, filterCurriculumCourse]);

  return (
    <>
      <CourseObj courseObj={filteredCourseObj} enrollList={enrollList} />
    </>
  );
}
