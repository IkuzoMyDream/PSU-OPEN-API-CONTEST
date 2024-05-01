<div>
          {filteredCourses.map((course, index) => (
            <div className="border rounded p-2 mb-2" key={index}>
              <h3 className="font-bold text-lg">{course.courseName}</h3>
              <p>{course.description}</p>
              <p>Enrollment Status: {course.enrollmentStatus}</p>
            </div>
          ))}
        </div>


// const handleFilterSubCategoriesChange = (e) => {
//   const { id, checked } = e.target;
//   if (checked) {
//     const selectedSubCategory = categoriesHeader.map((subItem) =>( subItem.subCategory.find(item => `subcategory-${item.subCategoryId}` === id)));
//     setSelectedCategories(prevSelected => [...prevSelected, selectedSubCategory.categoryNameThai]);
//   } else {
//     const removedSubCategory = categoriesHeader.map((subItem) =>( subItem?.subCategory.find(item => `subcategory-${item.subCategoryId}` === id)));
//     setSelectedCategories(prevSelected => prevSelected.filter(subcategory => subcategory.subCategoryName !== removedSubCategory.subCategoryName));
//   }
// };