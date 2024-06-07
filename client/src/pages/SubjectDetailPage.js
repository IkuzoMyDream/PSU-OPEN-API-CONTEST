import { useState, useEffect } from "react";
import { NavBar } from "../components/navbar";
import { Link, useLocation, useParams } from "react-router-dom";
import { axLOCAL, axPSU } from "../utils/config/ax";
import { localConfig, psuConfig } from "../utils/config/main";
import { useAuth } from "react-oidc-context";
import { Button } from "flowbite-react";
import { HiOutlineArrowLeft } from "react-icons/hi";

function SubjectDetailPage() {
  const [courses, setCourses] = useState([]);
  const { courseCode } = useParams();
  const auth = useAuth();
  const location = useLocation();


  const fetchCourses = async () => {
    try {
      const response = await axLOCAL.get(
        `${localConfig.getSomecourse}/${courseCode}`
      );
      setCourses(response.data);
      console.log("data =", response.data);
    } catch (error) {
      console.error(error);
    }
  };




  useEffect(() => {
    fetchCourses();


  }, [courseCode]);


  console.log("test555", location)
  return (
    <div className="font-noto_sans_thai">
      <Link to={`/course`}>
        <div className="mt-6 ml-4">
          <Button>
            <HiOutlineArrowLeft className="ml-2 h-5 w-5" />
            ย้อนกลับ
          </Button>
        </div>
      </Link>
      <div className="grid grid-cols-5 gap-4 ">
        <div className="col-start-2 col-end-6">

          <div className=" bg-white  p-4 rounded-md shadow-md w-9/12">
            <div className=" bg-pale-blue-gray  p-4 rounded-md shadow-md mt-4 ">
              <h2 className="font-bold text-2xl text-dark-slate-blue ml-2">
                {courses.courseCode} {courses.courseNameEng}
              </h2>
              <p className="font-semibold text-xl text-dark-slate-blue ml-2"> {courses.courseNameThai} </p>
              <p className="font-medium  text-base  text-gray-500 mt-1 ml-2">
                {" "}
                หน่วยกิต : {courses.credit}{" "}
              </p>
            </div>
            <div className=" border-t border-gray-300 mt-5"></div>
              <div className="mt-5">
                <p className=" font-bold text-lg mt-2 ">
                  {" "}
                  ประเภท :{" "}
                  {courses.subCategory
                    ? courses.subCategory.subCategoryName
                    : "กำลังโหลด..."}
                </p>
                <p className="text-lg font-semibold mt-2">
                  {" "}
                  {courses.enrollmentIds ? (
                    <ul>
                      {courses.enrollmentIds.map((enrollment, index) => (
                        <li key={index}>ภาคการศึกษา : {enrollment.enrollmentId}</li>
                      ))}
                    </ul>
                  ) : (
                    "กำลังโหลด..."
                  )}
                </p>
                <p className="text-lg font-semibold mt-2 ">
                  ภาควิชา :{" "}
                  {courses.deptId ? courses.deptId.deptNameThai : "กำลังโหลด..."}
                </p>
                <p className="text-lg font-semibold mt-2 ">
                  คณะ : {courses.facId ? courses.facId.facNameThai : "กำลังโหลด..."}
                </p>
                <p className="text-lg font-semibold mt-2">วิทยาเขต : หาดใหญ่</p>

              </div>
              <div className=" border-t border-gray-300 mt-5"></div>
              <div className="  grid grid-cols-10 gap-4 mt-5 ">
                  <div className="col-start-4 col-end-10">
                    {location.state.state.isEnrolled ?(

                      <p className="text-green-400 text-lg font-semibold" >
                      นักศึกษาได้ลงทะเบียนเรียนวิชานี้แล้วครับ/ค่ะ
                    </p>)
                    :(
                      <p className="text-lg text-red-500 font-semibold">นักศึกษายังไม่ได้ลงทะเบียนเรียนวิชานี้ครับ/ค่ะ</p>
                    )
                    } 

                  </div>
              </div>
            
          </div>
        </div>
        <div className="mt-64"></div>
      </div>
    </div>
  );
}

export default SubjectDetailPage;
