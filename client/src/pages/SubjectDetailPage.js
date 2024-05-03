import { useState, useEffect } from 'react';
import { NavBar } from "../components/navbar";
import { Link, useParams } from 'react-router-dom';
import { axLOCAL } from '../utils/config/ax';
import { localConfig } from '../utils/config/main';
import { useAuth } from 'react-oidc-context';
import { Button } from 'flowbite-react';
import { HiOutlineArrowLeft, HiShoppingCart } from "react-icons/hi";


function SubjectDetailPage() {
  const [courses, setCourses] = useState([]);
  const { courseCode } = useParams();
  const auth = useAuth();
  
  const fetchCourses = async () => {
    try {
      const response = await axLOCAL.get(`${localConfig.getSomecourse}/${courseCode}`);
      setCourses(response.data);
      console.log("data =",response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {

    fetchCourses();
  }, [courseCode]); 

  return (
    <div >
      <Link to={`/course`}>
      <div className='mt-6 ml-4'>
      <Button>
    <HiOutlineArrowLeft className="ml-2 h-5 w-5" />
    ย้อนกลับ
      </Button>
        </div>
      </Link>
        <div className='grid grid-cols-5 gap-4 '> 
        <div className="col-start-2 col-end-6" >  
          <div className=" bg-pale-blue-gray  p-4 rounded-md shadow-md w-9/12" >
            <h2 className='font-bold text-2xl mb-2 '>{courses.courseCode} {courses.courseNameEng}</h2>
            <p className='font-bold text-xl  mb-4' > {courses.courseNameThai} </p>
            <p className='font-bold text-xl'> จำนวนหน่วยกิต : {courses.totalCredit} </p>
            
          </div>
          <div className="bg-pale-blue-gray  p-4 rounded-md shadow-md w-9/12 mt-14">
            <h2   className='font-bold text-2xl mb-4'>รายละเอียดวิชา</h2>
            <p className='text-lg font-semibold'>ภาคการศึกษา : </p>   
            <p className='text-lg font-semibold '>ภาควิชา : </p>
            <p className='text-lg font-semibold'>คณะ :</p>
            <p className='text-lg font-semibold'>วิทยาเขต :</p>         
          </div >
        </div>
          </div>
    </div>
  );
}

export default SubjectDetailPage;
