import { Card } from "flowbite-react";

export default function CourseList({ courseList, enrollList }) {
  const isEnrolled = (courseCode, courses) => {
    return courses?.some((course) => course === courseCode);
  };
  return (
    <>
      {courseList &&
        enrollList &&
        (!courseList?.courses && !courseList?.groups ? (
          <>{courseList?.desc}</>
        ) : courseList.courses ? (
          courseList.courses?.map((course) => (
            <Card className=" my-3">
              <p>
                {course.courseCode} {course.courseNameThai} {course.credit}{" "}
                {isEnrolled(course.courseCode, enrollList)
                  ? "เรียนแล้ว"
                  : "ยังไม่เรียน"}
              </p>
            </Card>
          ))
        ) : (
          courseList?.groups.map((item) => (
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
            </>
          ))
        ))}
      {/* {!courseList?.courses && !courseList?.groups ? (
        <>{courseList?.desc}</>
      ) : courseList.courses ? (
        courseList.courses?.map((course) => (
          <Card className=" my-3">
            <p>
              {course.courseCode} {course.courseNameThai} {course.credit}{" "}
              {isEnrolled(course.coursCode, enrollList)
                ? "เรียนแล้ว"
                : "ยังไม่เรียน"}
            </p>
          </Card>
        ))
      ) : (
        courseList?.groups.map((item) => (
          <>
            <p>{item.name}</p>
            {item?.courses?.map((course) => (
              <ul>
                <Card className=" my-3">
                  <li className=" indent-12">
                    {course.courseCode} {course.courseNameThai} {course.credit}{" "}
                    {isEnrolled(course.coursCode, enrollList)
                      ? "เรียนแล้ว"
                      : "ยังไม่เรียน"}
                  </li>
                </Card>
              </ul>
            ))}
          </>
        ))
      )} */}
    </>
  );
}
