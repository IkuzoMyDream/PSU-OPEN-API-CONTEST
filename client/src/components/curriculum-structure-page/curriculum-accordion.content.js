import CourseObj from "./course-obj";

export default function CurriculumAccordionContent({ courseObj, enrollList }) {
  return (
    <>  
      <CourseObj courseObj={courseObj} enrollList={enrollList} />
    </>
  );
}
