import { useState, useEffect } from 'react';
import { NavBar } from "../components/navbar";
import { useParams } from 'react-router-dom';

function SubjectDetailPage() {
  const [courses, setCourses] = useState([null]);
  const { courseCode } = useParams();

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await fetch('http://localhost:1337/local-api/courses');
      if (!response.ok) {
        throw new Error('Failed to fetch courses');
      }
      const data = await response.json();
      setCourses(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-blue-500 text-white p-4 rounded-md shadow-md" style={{ width: '800px', height: '370px' }}>
      <h2>Subject Detail Page</h2>
      <p>Course Code: {courseCode}</p>
      {/* {courses.map(course => (
            <li key={course.id}>
              Course ID: {course.id}, Course Code: {course.courseCode}
            </li>
          ))} */}
      </div>
    </div>
  );
}

export default SubjectDetailPage;
