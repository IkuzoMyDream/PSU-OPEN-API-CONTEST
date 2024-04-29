import React, { useEffect, useState } from "react";
import { NavBar } from "../components/navbar";
import { axLOCAL, axPSU } from "../utils/config/ax";
import { localConfig, psuConfig } from "../utils/config/main";
import { useAuth } from "react-oidc-context";
import CourseFilterModal from "../components/course-page/CourseFilterModal";

function CoursesPage() {
  const auth = useAuth();
  
  const [categoriesData,setCategoriesData] = useState([]);
  const [categoriesHeader,setCategoriesHeader] = useState([]);
  const [studentEnrollment, setStudentEnrollment] = useState([]);
  const [searchCode, setSearchCode] = useState("");
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [filters, setFilters] = useState({
    general: false,
    elective: false,
    free: false,
    specialized: false
  });

  const fetchCategories = async () => {
    try {
      const result = await axLOCAL.get(localConfig.getCategories);
      const filterdHeader= result.data.map((item)=>({
        categoryId: item.catagoryId,
        categoryNameEng: item.categoryType,
        categoryNameThai : item.subjectGroupName ,
        subCategory : item.subCategoryIds.length !==  0 ? item.subCategoryIds:null,
        
        
      }))

      console.log("result =", result)
      console.log("filterHeader = ",filterdHeader)

      setCategoriesData(result.data)
      setCategoriesHeader(filterdHeader)
      
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (auth.isAuthenticated) {
      fetchCategories();
    }
  }, [auth, auth.user]);

  const handleSearch = () => {
    // Perform search logic here
  };

  const handleFilterModalClose = () => setShowFilterModal(false);

  const handleFilterChange = (e) => {
    const { name, checked } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked
    }));
  };


  return (
    
    <div className="grid grid-cols-4  gap-4 p-4">
      <div className="md:border border-gray-300 p-4 rounded">
        <h2 className="text-lg font-bold mb-2">หมวดหมู่รายวิชา</h2>
        {categoriesHeader.map((item)=>(

<div className= "indent-6 mb-2  " key={item.categoryId}>
<h3>{item.categoryNameThai}</h3>
<ul>
  {item.subCategory && item.subCategory.map((subItem) => (
    <li className= "indent-12 mb-1   "
    key={subItem.subCategoryId}>{subItem.subCategoryName}</li>
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

        </div>
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
