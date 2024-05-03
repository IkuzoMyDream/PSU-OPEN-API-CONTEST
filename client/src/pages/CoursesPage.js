// CoursesPage.js
import React, { useEffect, useState } from "react";
import { Pagination } from "flowbite-react";
import { NavBar } from "../components/navbar";
import { axLOCAL, axPSU } from "../utils/config/ax";
import { localConfig, psuConfig } from "../utils/config/main";
import { useAuth } from "react-oidc-context";
import CourseFilterModal from "../components/course-page/CourseFilterModal";
import { Link } from "react-router-dom";

function CoursesPage() {
  const auth = useAuth();
  
  const [coursesData,setCoursesData] = useState([]);
  const [categoriesHeader,setCategoriesHeader] = useState([]);
  const [studentEnrollment, setStudentEnrollment] = useState([]);
  const [studentDetail, setStudentDetail] = useState([]);
  const [searchCode, setSearchCode] = useState("");
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [filters, setFilters] = useState({
    isnotEnrolled: false,
    Enrolled: false,
  });
  const [selectedCourses,setSelectedCourses] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage] = useState(6); // Adjust as needed
  const [allRegistData,setAllRegistData] = useState([]);

  const fetchPsuStudentDetail = async () => {
    try {
      const result = await axPSU.get(psuConfig.getStudentDetail);
      console.log("stdDetail = ", result.data)
      setStudentDetail(result.data.studentId);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCategories = async () => {
    try {
      const result = await axLOCAL.get(localConfig.getCategories);
      const filterdHeader = result.data.map((item) => ({
        categoryId: item.categoryId,
        categoryNameEng: item.categoryType,
        categoryNameThai: item.subjectGroupName,
        subCategory: item.subCategoryIds.length !== 0 ? item.subCategoryIds : null,
      }));
      setCategoriesHeader(filterdHeader);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchEnrollment = async () => {
    try {
      const result = await axLOCAL.get(`${localConfig.getEnrollmentByStudId}/${studentDetail}`);
      console.log("enrroll = ",result)
      setStudentEnrollment(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCourses = async () => {
    try {
      const result = await axLOCAL.get(localConfig.getAllcourses);
      setCoursesData(result.data);
      setSelectedCourses(result.data)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (auth.isAuthenticated) {
      fetchPsuStudentDetail();
      fetchCategories();
      fetchCourses();
  
    }
  }, [auth, auth.user]);

  useEffect(() => {
    if (auth.isAuthenticated) {
      showcourse();
    }
    if (studentDetail){
      fetchEnrollment();
    }
  }, [selectedCategories, selectedSubCategories, currentPage,studentDetail]); 

  useEffect(() => {
    console.log("Student Enrollment:", studentEnrollment);
    genEnrollcourseId();
  }, [studentEnrollment]);
  
  const checkisEnrolled = (courseCode) => {
    return allRegistData.includes(courseCode);
  };
  
  const genEnrollcourseId = () => {
    let allRegistData = [];
    
    for (const key in studentEnrollment) {
      const group = studentEnrollment[key];
      if (group && group.registCourseIds && Array.isArray(group.registCourseIds)) {
        allRegistData.push(...group.registCourseIds);
      } else if (group && typeof group === "object") {
        for (const subKey in group) {
          const subGroup = group[subKey];
          if (subGroup && subGroup.registCourseIds && Array.isArray(subGroup.registCourseIds)) {
            allRegistData.push(...subGroup.registCourseIds);
          }
        }
      }
    }
    
    setAllRegistData(allRegistData);
    console.log("allregist =", allRegistData);
  };

  const handleSearch = () => {
    if (searchCode.length === 7) { 
      const filteredCourses = coursesData.filter(item => {
        const pattern = /^\d{3}-\d{3}$/;
        return pattern.test(item.courseCode) && item.courseCode.includes(searchCode);
      });  
      if (filteredCourses.length === 0 && searchCode !== "") {
        setSelectedCourses([{ courseCode: "ไม่มีรายวิชานี้อยู่" }]);
      } else {
        setSelectedCourses(filteredCourses);
      }
    } else {
      setSelectedCourses([{ courseCode: "ไม่มีรายวิชานี้อยู่" }]);
    }
  };

  const handleFilterModalClose = () => setShowFilterModal(false);

  const handleFilterChange = (e) => {
    const { name, checked } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked
    }));
  };

  const showcourse = () => {
    if (categoriesHeader.length > 0) {
      if (selectedCategories.length === 0 && selectedSubCategories.length === 0) {
        setSelectedCourses(coursesData);
      } else {
        let filteredCourses = coursesData;
  
        if (selectedCategories.length > 0) {
          filteredCourses = filteredCourses.filter(item => item.category && selectedCategories.includes(item.category.subjectGroupName));
        }
  
        if (selectedSubCategories.length > 0) {
          filteredCourses = filteredCourses.filter(item => {
            if (item.subCategory && typeof item.subCategory === "object") {
              return selectedSubCategories.includes(item.subCategory.subCategoryName);
            } 
            return false;
          });
        }
        
        setSelectedCourses(filteredCourses);
      }
    }
  };

  const handleFilterCategoriesChange = (e) => {
    const { id, checked } = e.target;
    let updatedCategories = [];
    showcourse(); 

    if (checked) {
      const selectedCategory = categoriesHeader.find(item => `category-${item.categoryId}` === id);
      updatedCategories = [...selectedCategories, selectedCategory.categoryNameThai];
    } else {
      const removedCategory = categoriesHeader.find(item => `category-${item.categoryId}` === id);
      updatedCategories = selectedCategories.filter(category => category !== removedCategory.categoryNameThai);
    }

    setSelectedCategories(updatedCategories);
  };

  const handleFilterSubCategoriesChange = (e) => {
    const { id, checked } = e.target;
    let updatedSubCategories = [];
    const selectedCategory = categoriesHeader.find(category => category.subCategory && category.subCategory.find(subItem => `subcategory-${subItem.subCategoryId}` === id));
    
    if (checked) {
      if (selectedCategory) {
        const selectedSubCategory = selectedCategory.subCategory.find(subItem => `subcategory-${subItem.subCategoryId}` === id);
        updatedSubCategories = [...selectedSubCategories, selectedSubCategory.subCategoryName];
      }
    } else {
      const removedsubCategory = selectedCategory.subCategory.find(subItem => `subcategory-${subItem.subCategoryId}` === id);
      updatedSubCategories = selectedSubCategories.filter(subcategory => subcategory !== removedsubCategory.subCategoryName);
    }
  
    setSelectedSubCategories(updatedSubCategories);
  };

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = selectedCourses.slice(indexOfFirstCourse, indexOfLastCourse);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const filterEnrolledCourses = () => {
    if (!filters.isnotEnrolled && !filters.Enrolled) {
      return selectedCourses;
    } else if (filters.isnotEnrolled && !filters.Enrolled) {
      return selectedCourses.filter(course => !checkisEnrolled(course.courseCode));
    } else if (!filters.isnotEnrolled && filters.Enrolled) {
      return selectedCourses.filter(course => checkisEnrolled(course.courseCode));
    } else {
      return [];
    }
  };

  console.log("coursepage = ", coursesPerPage ,filterEnrolledCourses().length)
  console.log("seletedcourse",selectedCourses)

  return (
    <div className="grid grid-cols-4  gap-4 p-4">
      <div className="md:border border-gray-300 p-4 rounded">
        <h2 className="text-lg font-bold mb-2">หมวดหมู่รายวิชา</h2>
        {categoriesHeader.map((item)=>(
          <div className="indent-6 mb-4" key={item.categoryId}>
            <div className="flex items-center mb-3">
              <input type="checkbox" id={`category-${item.categoryId}`} onChange={handleFilterCategoriesChange} className="mr-2 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
              <label htmlFor={`category-${item.categoryId}`} className="mr-2">{item.categoryNameThai}</label>
            </div>
            <ul>
              {item.subCategory && item.subCategory.map((subItem) => (
                <div key={subItem.subCategoryId}>
                  <li className="indent-16 mb-4 flex items-center">
                    <input type="checkbox" id={`subcategory-${subItem.subCategoryId}`} onChange={handleFilterSubCategoriesChange} className="mr-2 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                    <label htmlFor={`subcategory-${subItem.subCategoryId}`} className="mr-2">{subItem.subCategoryName}</label>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex flex-col col-span-3 justify-start p-2 rounded" >
        <h2 className="text-lg font-bold mb-2">ค้นหารายวิชา</h2>
        <div className="flex justify-start items-center mb-4 gap-2">
          <input
            className="border rounded px-3 py-2 mr-2 w-1/2"
            type="text"
            placeholder="รหัสวิชา"
            value={searchCode}
            onChange={(e) => setSearchCode(e.target.value)}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleSearch}
          >
            ค้นหา
          </button>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setShowFilterModal(true)}
          >
            Filter
          </button>
        </div>


        <div>
           
            <div>
              {filterEnrolledCourses().map((item) => (
                <div className="border rounded bg-pale-blue-gray p-2 mb-2" key={item.id}>
                  <Link to={`/course/${item.courseCode}`}>{item.courseCode}</Link>
                  <h3 className="font-bold text-lg">{item.courseCode}</h3>
                  <p>{item.courseNameEng}</p>
                  {checkisEnrolled(item.courseCode) ? (
                    <p>ลงทะเบียนแล้ว</p>
                  ) : (
                    <p>ยังไม่ลงทะเบียน</p>
                  )}
                </div>
              ))}
            </div>
          
        </div>
        <Pagination
          totalPages={Math.ceil(filterEnrolledCourses().length / coursesPerPage)}
          pageLimit={coursesPerPage}
          currentPage={currentPage}
          onPageChange={paginate}
        />
      </div>
      <CourseFilterModal
        show={showFilterModal}
        onClose={handleFilterModalClose}
        filters={filters}
        onFilterChange={handleFilterChange}
      />
    </div>
  );
}

export default CoursesPage;
