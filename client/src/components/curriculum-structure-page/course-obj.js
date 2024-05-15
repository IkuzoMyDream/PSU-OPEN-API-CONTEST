import { Card } from "flowbite-react";
import CoursePagination from "./course-pagination";
import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa6";

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
              <Card className=" my-3 bg-pale-blue-gray relative">
                <div className=" grid grid-cols-2">
                  <div>
                    {course.courseCode} {course.courseNameThai} {course.credit}{" "}
                  </div>
                  <div className=" flex justify-end">
                    {isEnrolled(course.courseCode, enrollList) ? (
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
                <Card className=" my-3 bg-pale-blue-gray relative">
                  <div className=" grid grid-cols-2">
                    <div>
                      {course.courseCode} {course.courseNameThai}{" "}
                      {course.credit}{" "}
                    </div>
                    <div className=" flex justify-end">
                      {isEnrolled(course.courseCode, enrollList) ? (
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
