import React, { useEffect, useState } from "react";
import { NavBar } from "../components/navbar";
import { axLOCAL, axPSU } from "../utils/config/ax";
import { localConfig, psuConfig } from "../utils/config/main";
import { useAuth } from "react-oidc-context";
import CourseFilterModal from "../components/course-page/CourseFilterModal";

function CoursesPage() {
  const auth = useAuth();
  
  const [coursesData,setCoursesData] = useState([]);
  const [categoriesHeader,setCategoriesHeader] = useState([]);
  const [studentEnrollment, setStudentEnrollment] = useState([]);
  const [searchCode, setSearchCode] = useState("");
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [filters, setFilters] = useState({
    isnotEnrolled: false,
    Enrolled: false,
  });
  const [selectedCourses,setSelectedCourses] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const result = await axLOCAL.get(localConfig.getCategories);
      const filterdHeader = result.data.map((item) => ({
        categoryId: item.catagoryId,
        categoryNameEng: item.categoryType,
        categoryNameThai: item.subjectGroupName,
        subCategory: item.subCategoryIds.length !== 0 ? item.subCategoryIds : null,
      }));

      setCategoriesHeader(filterdHeader);
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

  useEffect(() => {
    if (auth.isAuthenticated) {
      fetchCategories();
      fetchCourses();
    }
  }, [auth, auth.user]);

  useEffect(() => {
    showcourse();
  }, [selectedCategories, selectedSubCategories]); // เพิ่ม selectedSubCategories เป็น dependency ของ useEffect

  const handleSearch = () => {
    const filteredCourses = coursesData.filter(item => item.courseCode.includes(searchCode));
  
    if (filteredCourses.length === 0 && searchCode !== "") {
      setSelectedCourses([{ courseCode: "ไม่มีรายวิชานี้อยู่" }]);
    } else {
      setSelectedCourses(filteredCourses);
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

  console.log("subcate = ",coursesData )
  console.log("seleccate = ",selectedCategories )
  console.log("selectsubcate = ",selectedSubCategories )

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
          {selectedCourses.length === 0 ? (
            <div>
              {coursesData.map((item) => (
                <div className="border rounded p-2 mb-2" key={item.id}>
                  <h3 className="font-bold text-lg">{item.courseCode}</h3>
                  <p>{item.courseNameEng}</p>
                </div>
              ))}
            </div>
          ) : (
            <div>
              {selectedCourses.map((item) => (
                <div className="border rounded p-2 mb-2" key={item.id}>
                  <h3 className="font-bold text-lg">{item.courseCode}</h3>
                  <p>{item.courseNameEng}</p>
                </div>
              ))}
            </div>
          )}
        </div>
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
