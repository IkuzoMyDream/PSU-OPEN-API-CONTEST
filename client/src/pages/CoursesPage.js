// CoursesPage.js
import React, { useEffect, useState } from "react";
import { Pagination } from "flowbite-react";
import { axLOCAL, axPSU } from "../utils/config/ax";
import { localConfig, psuConfig } from "../utils/config/main";
import { useAuth } from "react-oidc-context";
import { Link } from "react-router-dom";
import CourseFilterModal from "../components/course-page/CourseFilterModal";
import { RiFilter2Line } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
  
function CoursesPage() {
  const auth = useAuth();

  const [coursesData, setCoursesData] = useState([]);
  const [categoriesHeader, setCategoriesHeader] = useState([]);
  const [studentEnrollment, setStudentEnrollment] = useState([]);
  const [studentDetail, setStudentDetail] = useState([]);
  const [searchCode, setSearchCode] = useState("");
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [filters, setFilters] = useState({
    isnotEnrolled: false,
    Enrolled: false,
  });
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage] = useState(6);
  const [allRegistData, setAllRegistData] = useState([]);

  const fetchPsuStudentDetail = async () => {
    try {
      const result = await axPSU.get(psuConfig.getStudentDetail);
      setStudentDetail(result.data.studentId);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCategories = async () => {
    try {
      const result = await axLOCAL.get(localConfig.getCategories);
      console.log("all cata gayyyyyyyyy", result);
      const filterdHeader = result.data.map((item) => ({
        categoryId: item.categoryId,
        categoryNameEng: item.categoryType,
        categoryNameThai: item.subjectGroupName,
        generalType: item.generalType,
        categoryNumber: item.subjectGroupNumber,
        subCategory:
          item.subCategoryIds.length !== 0 ? item.subCategoryIds : null,
      }));
      setCategoriesHeader(filterdHeader);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchEnrollment = async () => {
    try {
      const result = await axLOCAL.get(
        `${localConfig.getEnrollmentByStudId}/${studentDetail}`
      );
      setStudentEnrollment(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCourses = async () => {
    try {
      const result = await axLOCAL.get(localConfig.getAllcourses);
      setCoursesData(result.data);
      setSelectedCourses(result.data);
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
    if (studentDetail) {
      fetchEnrollment();
    }
  }, [selectedCategories, selectedSubCategories, currentPage, studentDetail]);

  useEffect(() => {
    genEnrollcourseId();
  }, [studentEnrollment]);

  const checkisEnrolled = (courseCode) => {
    return allRegistData.includes(courseCode);
  };

  const genEnrollcourseId = () => {
    let allRegistData = [];

    for (const key in studentEnrollment) {
      const group = studentEnrollment[key];
      if (
        group &&
        group.registCourseIds &&
        Array.isArray(group.registCourseIds)
      ) {
        allRegistData.push(...group.registCourseIds);
      } else if (group && typeof group === "object") {
        for (const subKey in group) {
          const subGroup = group[subKey];
          if (
            subGroup &&
            subGroup.registCourseIds &&
            Array.isArray(subGroup.registCourseIds)
          ) {
            allRegistData.push(...subGroup.registCourseIds);
          }
        }
      }
    }

    setAllRegistData(allRegistData);
  };

  const handleSearch = () => {
    let processedSearchCode;

    if (searchCode.length === 0) {
      showcourse();
    } else {
      if (/\d+$/.test(searchCode) && searchCode.length === 3) {
        processedSearchCode = searchCode + "-";
      } else {
        processedSearchCode = searchCode.replace(/[^\d-]/g, "");
      }

      if (processedSearchCode.length >= 3) {
        const pattern = new RegExp(`^${processedSearchCode}\\d{0,3}$`);
        const filteredCourses = coursesData.filter((item) =>
          pattern.test(item.courseCode)
        );

        if (filteredCourses.length === 0) {
          setSelectedCourses([{ courseCode: "ไม่มีรายวิชานี้อยู่" }]);
        } else {
          setSelectedCourses(filteredCourses);
        }
      } else {
        setSelectedCourses([{ courseCode: "ไม่มีรายวิชานี้อยู่" }]);
      }
    }
  };

  const handleFilterModalClose = () => setShowFilterModal(false);

  const handleFilterChange = (e) => {
    const { name, checked } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));
  };

  const showcourse = () => {
    if (categoriesHeader.length > 0) {
      if (
        selectedCategories.length === 0 &&
        selectedSubCategories.length === 0
      ) {
        setSelectedCourses(coursesData);
      } else {
        let filteredCourses = coursesData;

        if (selectedCategories.length > 0) {
          filteredCourses = filteredCourses.filter(
            (item) =>
              item.category &&
              selectedCategories.includes(item.category.subjectGroupName)
          );
        }

        if (selectedSubCategories.length > 0) {
          filteredCourses = filteredCourses.filter((item) => {
            if (item.subCategory && typeof item.subCategory === "object") {
              return selectedSubCategories.includes(
                item.subCategory.subCategoryName
              );
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
    let updatedSubCategories = [];
    showcourse();

    if (checked) {
      const selectedCategory = categoriesHeader.find(
        (item) => `category-${item.categoryId}` === id
      );
      updatedCategories = [
        ...selectedCategories,
        selectedCategory.categoryNameThai,
      ];

      // Add subcategories of the selected category
      if (selectedCategory.subCategory) {
        selectedCategory.subCategory.forEach((subItem) => {
          updatedSubCategories.push(subItem.subCategoryName);
        });
      }
    } else {
      const removedCategory = categoriesHeader.find(
        (item) => `category-${item.categoryId}` === id
      );
      updatedCategories = selectedCategories.filter(
        (category) => category !== removedCategory.categoryNameThai
      );

      // Remove subcategories of the unselected category
      updatedSubCategories = selectedSubCategories.filter(
        (subcategory) =>
          !removedCategory.subCategory ||
          !removedCategory.subCategory.some(
            (subItem) => subItem.subCategoryName === subcategory
          )
      );
    }

    setSelectedCategories(updatedCategories);
    setSelectedSubCategories(updatedSubCategories);
  };

  const handleFilterSubCategoriesChange = (e) => {
    const { id, checked } = e.target;
    let updatedSubCategories = [];
    const selectedCategory = categoriesHeader.find(
      (category) =>
        category.subCategory &&
        category.subCategory.find(
          (subItem) => `subcategory-${subItem.subCategoryId}` === id
        )
    );

    if (checked) {
      if (selectedCategory) {
        const selectedSubCategory = selectedCategory.subCategory.find(
          (subItem) => `subcategory-${subItem.subCategoryId}` === id
        );
        updatedSubCategories = [
          ...selectedSubCategories,
          selectedSubCategory.subCategoryName,
        ];
      }
    } else {
      const removedsubCategory = selectedCategory.subCategory.find(
        (subItem) => `subcategory-${subItem.subCategoryId}` === id
      );
      updatedSubCategories = selectedSubCategories.filter(
        (subcategory) => subcategory !== removedsubCategory.subCategoryName
      );
    }

    setSelectedSubCategories(updatedSubCategories);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const filterEnrolledCourses = () => {
    let filteredCourses = selectedCourses;

    if (filters.isnotEnrolled && !filters.Enrolled) {
      filteredCourses = filteredCourses.filter(
        (course) => !checkisEnrolled(course.courseCode)
      );
    } else if (!filters.isnotEnrolled && filters.Enrolled) {
      filteredCourses = filteredCourses.filter((course) =>
        checkisEnrolled(course.courseCode)
      );
    }

    return filteredCourses;
  };

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filterEnrolledCourses().slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );

  // console.log("coursepage = ", coursesPerPage, filterEnrolledCourses().length);
  // console.log("seletedcourse", selectedCourses);

  return (
    <div className="font-noto_sans_thai grid grid-cols-4  gap-4 p-4">
      <div className="md:border border-gray-300 p-5   rounded">
        <h2 className="text-lg font-bold mb-2">หมวดหมู่รายวิชา</h2>
        {categoriesHeader.map((item) => (
          <div className="mb-4" key={item.categoryId}>
            <div className="flex items-center mb-3 ">
              <input
                type="checkbox"
                id={`category-${item.categoryId}`}
                onChange={handleFilterCategoriesChange}
                className="mr-2 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              {item.generalType === "Required" ? (
                <label
                  htmlFor={`category-${item.categoryId}`}
                  className="truncate ..."
                >
                  สาระ {item.categoryNumber} {item.categoryNameThai}
                </label>
              ) : (
                <label
                  htmlFor={`category-${item.categoryId}`}
                >
                  {item.categoryNameThai}
                </label>
              )}
              
            </div>
            <div className="w-full  border-b border-gray-150"></div>
                  
            <ul>
              {item.subCategory &&
                item.subCategory.map((subItem) => (
                  <div key={subItem.subCategoryId}>
                    <li className=" ml-10 indent-1 mb-2 mt-2 flex items-center">
                      <input
                        type="checkbox"
                        id={`subcategory-${subItem.subCategoryId}`}
                        checked={selectedSubCategories.includes(
                          subItem.subCategoryName
                        )}
                        onChange={handleFilterSubCategoriesChange}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <label htmlFor={`subcategory-${subItem.subCategoryId}`}>
                        {subItem.subCategoryName}
                      </label>
                    </li>
                    <div className="w-full border-b border-gray-150"></div>
                  </div>
                ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex flex-col col-span-3 justify-start p-2 rounded">
        <h2 className="text-3xl font-bold mb-4">ค้นหารายวิชา</h2>
        <div className="flex justify-start items-center mb-4 gap-2">
          <input
            className="border rounded px-3 py-2 mr-2 w-1/2"
            type="text"
            placeholder="รหัสวิชา"
            value={searchCode}
            onChange={(e) => setSearchCode(e.target.value)}
          />
          <button
            className="bg-dark-blue-gray hover:bg-blue-700 text-white font-bold py-3 px-6 rounded"
            onClick={handleSearch}
          >
            <FaSearch />
          </button>

          <button
            className="bg-dark-blue-gray hover:bg-blue-700 text-white font-bold py-3 px-6 rounded"
            onClick={() => setShowFilterModal(true)}
          >
            <RiFilter2Line />
          </button>
        </div>

        <div>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center ">
              <div className="w-10/12 border-t border-gray-300"></div>
            </div>
            <p className="font-semibold text-xl">
              จำนวนรายวิชาทั้งหมด {selectedCourses.length}
            </p>
            {currentCourses.map((item) => (
              <Link to={`/course/${item.courseCode}`} key={item.id}>
                {console.log("testgay", currentCourses)}
                <div className="relative border rounded bg-pale-blue-gray p-2 py-3 mb-2 w-12/12">
                  <h3 className="font-bold text-lg text-dark-slate-blue ml-2">
                    {item.courseCode} {item.courseNameEng}
                  </h3>
                  <p className="font-semibold text-base text-dark-slate-blue ml-2 ">
                    {item.courseNameThai}
                  </p>
                  <p className="font-medium text-gray-400 mt-1 ml-2">
                    {item.credit}
                  </p>
                  <div className="absolute top-0 right-10 transform flex flex-wrap gap-2 ">
                    {item.category ? (
                      <div className=" w-17 h-6 rounded bg-green-300 border-4 border-white mt-2    ">
                        <p className="truncate ... scale-75 text-xs font-semibold items-center justify-center">
                          {item.category.subjectGroupName}
                        </p>
                      </div>
                    ) : (
                      <></>
                    )}
                    {item.subCategory ? (
                      <div className="w-17 h-6  rounded bg-green-300 border-4 border-white mt-2">
                        <p className="scale-75 text-xs font-semibold truncate ...  items-center justify-center">
                          {item.subCategory.subCategoryName}
                        </p>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                  {checkisEnrolled(item.courseCode) ? (
                    <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
                      <div className="w-12 h-12 rounded-full bg-green-300 border-4 border-white flex items-center justify-center">
                        <FaCheck className="text-white" />
                      </div>
                    </div>
                  ) : (
                    <p className="mb-2"></p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
        <Pagination
          layout="table"
          totalPages={Math.ceil(
            filterEnrolledCourses().length / coursesPerPage
          )}
          pageLimit={coursesPerPage}
          currentPage={currentPage}
          onPageChange={paginate}
          showIcons
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
