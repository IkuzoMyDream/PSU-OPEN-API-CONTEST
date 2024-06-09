import { useEffect, useState } from "react";
import StudentDetail from "../components/home-page/student-detail";
import { axLOCAL, axPSU } from "../utils/config/ax";
import { localConfig, psuConfig } from "../utils/config/main";
import { useAuth } from "react-oidc-context";
import CorriculumStructure from "../components/curriculum-structure-page/curriculum-structure";
import { HiInformationCircle, HiOutlineArrowRight } from "react-icons/hi";
import { Alert } from "flowbite-react";

function StudyPlanPage() {
  const auth = useAuth();

  const [studentDetail, setStudentDetail] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [curriculumStructure, setCurriculumStructure] = useState(null);
  const [studentEnroll, setStudentEnroll] = useState(null);
  const [coursesData, setCoursesData] = useState([]);
  const [freeCourse, setFreecourse] = useState({});

  const fetchPsuStudentDetail = async () => {
    try {
      const result = await axPSU.get(psuConfig.getStudentDetail);
      setStudentDetail(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchStudentProfileImage = async () => {
    try {
      const response = await axPSU.get(psuConfig.getStudentProfileImage);
      setProfileImage(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCourses = async () => {
    try {
      const result = await axLOCAL.get(localConfig.getAllcourses);
      setCoursesData(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCurriculumStructure = async () => {
    try {
      const result = await axLOCAL.get(
        `${localConfig.getCurriculumStructureById}/${`1`}`
      );
      setCurriculumStructure(result.data.curriculum_structure);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchStudentEnrollment = async () => {
    try {
      const result = await axLOCAL(
        `${localConfig.getEnrollmentByStudId}/${studentDetail?.studentId}`
      );
      setStudentEnroll(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const filterEnrolledFreeccourse = () => {
    const freeCourses = studentEnroll?.freeElecCourse?.registCourseIds?.reduce((acc, courseId) => {
      const filteredCourse = coursesData.find((item) => item.courseCode === courseId);
      if (filteredCourse) {
        acc[courseId] = filteredCourse;
      }
      return acc;
    }, {});
    setFreecourse(freeCourses);
  };

  useEffect(() => {
    if (auth.isAuthenticated) {
      fetchPsuStudentDetail();
      fetchStudentProfileImage();
      fetchCurriculumStructure();
      fetchCourses();
    }
  }, [auth.user, auth]);

  useEffect(() => {
    if (studentDetail?.studentId) {
      fetchStudentEnrollment();
    }
  }, [studentDetail]);

  useEffect(() => {
    if (studentEnroll) {
      filterEnrolledFreeccourse();
    }
  }, [studentEnroll]);

  console.log("freefilter = ", studentEnroll);
  console.log("course =", coursesData);
  console.log("freecourse = ", freeCourse);

  return (
    <>
      {profileImage &&
        studentDetail &&
        studentEnroll &&
        curriculumStructure && (
          
          <div className="font-noto_sans_thai container mx-auto sm-auto md-auto lg-auto px-20 py-4">
            <div className="mb-4">
            <Alert 
                 
                 color="info"
                 icon={HiInformationCircle}
                 >
                 *ข้อมูลต่อไปนี้เป็นข้อมูลประมาณเท่านั้น จะต้องตรวจสอบอีกครั้ง*
                 สามารถค้นหาข้อมูลเพิ่มเติมได้ที่ https://sis.psu.ac.th/
               </Alert>
                 </div>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-start-1 col-end-4">
                <div class="max-w-sm p-6 bg-gradient-to-r bg-pale-blue-gray border-gray-200 dark:bg-gray-900 rounded-lg shadow ">
                  {profileImage && <img src={profileImage} />}
                  <StudentDetail studentDetail={studentDetail} />
                </div>
              </div>
              <div className="col-start-5 col-end-13">
                <div class="max-w-full p-6 bg-gradient-to-r bg-pale-blue-gray border-gray-200 dark:bg-gray-900 rounded-lg shadow ">
                  <div className="text-center">
                    <p className=" text-2xl">
                      {curriculumStructure?.curriculumName}
                    </p>
                  </div>
                  <div className="">
                    <CorriculumStructure
                      studentEnroll={studentEnroll}
                      curriculumStructure={curriculumStructure}
                      freeCourse={freeCourse}
                    />
                  </div>
                </div>
              </div>
              <div className=""></div>
            </div>
          </div>
        )}
    </>
  );
}

export default StudyPlanPage;
