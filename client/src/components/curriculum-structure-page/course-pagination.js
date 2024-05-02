import { Pagination } from "flowbite-react";

export default function CoursePagination({
  courseList,
  paginate,
  currentPage,
  coursePerPage,
  setCurrentPageIndex,
  currentPageIndex,
}) {
  return (
    <>
      {courseList && currentPage && (
        <Pagination 
          onClick={() => {
            setCurrentPageIndex(currentPageIndex);
            console.log(courseList, currentPage);
          }}
          currentPage={currentPage}
          totalPages={Math.ceil(courseList?.length / coursePerPage)}
          onPageChange={paginate}
          showIcons
        />
      )}
    </>
  );
}
