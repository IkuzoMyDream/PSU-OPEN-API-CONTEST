import { Card } from "flowbite-react";
import CoursePagination from "./course-pagination";
import { useEffect, useState } from "react";

export default function CourseObj({ courseObj, enrollList }) {
  const [courseList, setCourseList] = useState(null);
  const [currentCourses, setCurrentCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageIndex, setCurrentPageIndex] = useState(null);
  const coursePerPage = 5;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    if (courseObj?.courses) {
      setCourseList(courseObj?.courses);
      setCurrentPage(1);
    } else if (courseObj?.groups) {
      setCourseList(courseObj?.groups);
      setCurrentPage(courseObj?.groups.map((item) => 1));
    }
    setCurrentCourses(courseList);
  }, [courseObj]);

  useEffect(() => {
    if (courseObj?.courses) {
      const indexOfLastCourse = currentPage * coursePerPage;
      const indexOfFirstCourse = indexOfLastCourse - coursePerPage;
      const currentCourses = courseObj?.courses?.slice(
        indexOfFirstCourse,
        indexOfLastCourse
      );
      setCurrentCourses(currentCourses);
    } else if (courseObj?.groups) {
      const indexOfLastCourse = currentPage[currentPageIndex] * coursePerPage;
      const indexOfFirstCourse = indexOfLastCourse - coursePerPage;
      const currentCourses = courseList?.courses?.slice(
        indexOfFirstCourse,
        indexOfLastCourse
      );
      setCurrentCourses(currentCourses);
    }
  }, [courseList, currentPage]);

  const isEnrolled = (courseCode, courses) => {
    return courses?.some((course) => course === courseCode);
  };

  return (
    <>
      {courseObj &&
        enrollList &&
        (!courseObj?.courses && !courseObj?.groups ? (
          <>{courseObj?.desc}</>
        ) : courseObj.courses ? (
          <>
            {currentCourses?.map((course) => (
              <Card className=" my-3 bg-pale-blue-gray">
                <p>
                  {course.courseCode} {course.courseNameThai} {course.credit}{" "}
                  {isEnrolled(course.courseCode, enrollList)
                    ? "เรียนแล้ว"
                    : "ยังไม่เรียน"}
                </p>
              </Card>
            ))}
            <CoursePagination
              courseList={courseObj?.courses}
              paginate={paginate}
              currentPage={currentPage}
              coursePerPage={coursePerPage}
              currentCourseList={currentCourses}
              setCurrentPageIndex={setCurrentPageIndex}
              currentPageIndex={1}
            />
          </>
        ) : (
          courseObj?.groups.map((item, index) => (
            <>
              <p>{item.name}</p>
              {item?.courses?.map((course) => (
                <ul>
                  <Card className=" my-3">
                    <li className=" indent-12">
                      {course.courseCode} {course.courseNameThai}{" "}
                      {course.credit}{" "}
                      {isEnrolled(course.courseCode, enrollList)
                        ? "เรียนแล้ว"
                        : "ยังไม่เรียน"}
                    </li>
                  </Card>
                </ul>
              ))}
              <CoursePagination
                courseList={item?.courses}
                paginate={paginate}
                currentPage={currentPage[index]}
                coursePerPage={coursePerPage}
                currentCourseList={currentCourses}
                setCurrentPageIndex={setCurrentPageIndex}
                currentPageIndex={index}
              />
            </>
          ))
        ))}
    </>
  );
}
