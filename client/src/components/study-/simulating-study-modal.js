import { Button, Modal, Sidebar } from "flowbite-react";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { SimulatingStudyCartModal } from "./simulation-study-cart-modal";

export function SimulatingStudyModal({
  isOpenModal,
  setIsOpenModal,
  courses,
  categories,
  selectedSimCourses,
  setSelectedSimCourses,
  currentSimTermYear,
}) {
  const [searchCode, setSearchCode] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);
  const [allRegistData, setAllRegistData] = useState([]);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const [studentEnrollment, setStudentEnrollment] = useState([]);

  const [selectedModalSimCourses, setSelectedModalSimCourses] = useState([]);

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
        const filteredCourses = courses.filter((item) =>
          pattern.test(item.courseCode)
        );

        if (filteredCourses.length === 0) {
          setFilteredCourses([{ courseCode: "ไม่มีรายวิชานี้อยู่" }]);
        } else {
          setFilteredCourses(filteredCourses);
        }
      } else {
        setFilteredCourses([{ courseCode: "ไม่มีรายวิชานี้อยู่" }]);
      }
    }
  };

  const showcourse = () => {
    if (categories.length > 0) {
      if (
        selectedCategories.length === 0 &&
        selectedSubCategories.length === 0
      ) {
        setFilteredCourses(courses);
      } else {
        let filteredCourses = courses;

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

        setFilteredCourses(filteredCourses);
      }
    }
  };

  const checkisEnrolled = (courseCode) => {
    return allRegistData.includes(courseCode);
  };

  const handleFilterCategoriesChange = (e) => {
    const { id, checked } = e.target;
    let updatedCategories = [];
    let updatedSubCategories = [];
    showcourse();

    if (checked) {
      const selectedCategory = categories.find(
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
      const removedCategory = categories.find(
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
    const selectedCategory = categories.find(
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

  useEffect(() => {
    setFilteredCourses(courses);
  }, [courses]);

  useEffect(() => {
    genEnrollcourseId();
  }, [studentEnrollment]);

  useEffect(() => {
    showcourse();
  }, [selectedCategories, selectedSubCategories]);

  useEffect(() => {
    if (selectedSimCourses.length && !selectedModalSimCourses.length) {
      setSelectedModalSimCourses(selectedSimCourses);
    }
    console.log(selectedModalSimCourses);
  }, [selectedModalSimCourses, selectedSimCourses]);

  return (
    <>
      <SimulatingStudyCartModal
        isCartModalOpen={isCartModalOpen}
        setIsCartModalOpen={setIsCartModalOpen}
        selectedModalSimCourses={selectedModalSimCourses}
        setSelectedModalSimCourses={setSelectedModalSimCourses}
      />
      <Modal
        className=" font-noto_sans_thai"
        size="7xl"
        show={isOpenModal}
        onClose={() => setIsOpenModal(false)}
      >
        <Modal.Header>เลือกรายวิชาที่ต้องการ</Modal.Header>
        <Modal.Body>
          <div className=" grid grid-cols-3 gap-3">
            <div className="md:border border-gray-300 p-5 rounded">
              <h2 className="text-lg font-bold mb-2">หมวดหมู่รายวิชา</h2>
              <div>
                {categories.map((item) => (
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
                        <label htmlFor={`category-${item.categoryId}`}>
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
                              <label
                                htmlFor={`subcategory-${subItem.subCategoryId}`}
                              >
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
            </div>
            <div className=" col-span-2">
              <h2 className="text-3xl font-bold mb-3">ค้นหารายวิชา</h2>
              <div className=" grid grid-cols-5 gap-3">
                <div className=" col-span-4">
                  <input
                    style={{ width: "100%" }}
                    className="border rounded px-3 py-2 mr-2 w-1/2"
                    type="text"
                    placeholder="รหัสวิชา"
                    value={searchCode}
                    onChange={(e) => setSearchCode(e.target.value)}
                  />
                </div>
                <div className="">
                  <button
                    className="bg-dark-blue-gray hover:bg-blue-700 text-white font-bold py-3 px-6 rounded mr-3"
                    onClick={handleSearch}
                  >
                    <FaSearch />
                  </button>
                  <button
                    onClick={() => setIsCartModalOpen(true)}
                    className="relative bg-dark-blue-gray hover:bg-blue-700 text-white font-bold py-3 px-6 rounded"
                  >
                    <FaCartShopping />
                    <div className=" absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
                      <div className="w-6 h-6 rounded-full bg-yellow-300 flex items-center justify-center">
                        <p className=" text-black text-sm">
                          {selectedModalSimCourses.length}
                        </p>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              <div className=" grid grid-cols-1 mt-3">
                {filteredCourses.map((item) => (
                  <div key={item.id}>
                    <div className="relative border rounded bg-pale-blue-gray p-2 py-3 mb-2 w-12/12">
                      <h3
                        className="font-bold text-lg text-dark-slate-blue ml-2"
                        style={{
                          maxWidth: "45ch",
                          textOverflow: "ellipsis",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {item.courseCode} {item.courseNameEng}
                      </h3>
                      <p className="font-semibold text-base text-dark-slate-blue ml-2 ">
                        {item.courseNameThai}
                      </p>
                      <p className="font-medium text-gray-400 mt-1 ml-2">
                        {item.credit ? item.credit : `x(y-y-y)`}
                      </p>
                      <div className=" absolute bottom-2 right-2 transform flex flex-wrap gap-2">
                        <Button
                          color={
                            selectedModalSimCourses
                              .map((course) => course.courseCode)
                              .includes(item.courseCode)
                              ? "light"
                              : "dark"
                          }
                          onClick={() => {
                            selectedModalSimCourses
                              .map((course) => course.courseCode)
                              .includes(item.courseCode)
                              ? setSelectedModalSimCourses((prevState) =>
                                  [...prevState].filter(
                                    (prev) => prev.courseCode != item.courseCode
                                  )
                                )
                              : setSelectedModalSimCourses((prevState) => [
                                  ...prevState,
                                  { ...item, ...currentSimTermYear },
                                ]);
                          }}
                        >
                          <span className=" mr-2">
                            {selectedModalSimCourses
                              .map((course) => course.courseCode)
                              .includes(item.courseCode) ? (
                              <>
                                <svg
                                  fill="#2D505B"
                                  stroke-width="0"
                                  viewBox="0 0 24 24"
                                  height="1.5em"
                                  width="1.5em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path fill="none" d="M0 0h24v24H0z"></path>
                                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                                </svg>
                              </>
                            ) : (
                              <>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="1.5em"
                                  height="1.5em"
                                  viewBox="0 0 24 24"
                                  fill="#E8F8F8"
                                >
                                  <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
                                </svg>
                              </>
                            )}
                          </span>
                          <p
                            className={
                              selectedModalSimCourses
                                .map((course) => course.courseCode)
                                .includes(item.courseCode)
                                ? "text-dark-slate-blue"
                                : " text-bg-pale-blue-gray"
                            }
                          >
                            เลือก
                          </p>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="flex justify-center w-full">
            <Button
              className="bg-gradient-to-r from-green-1 to-green-2 mr-2"
              onClick={() => {
                setSelectedSimCourses(selectedModalSimCourses);
                setIsOpenModal(false);
              }}
            >
              เพิ่มรายวิชา
            </Button>
            <Button
              className="bg-gradient-to-r from-red-1 to-red-2"
              onClick={() => setIsOpenModal(false)}
            >
              ยกเลิก
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}
