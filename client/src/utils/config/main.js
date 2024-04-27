const psuConfig = {
  urlPrefix: "http://localhost:1337/psu-api",
  getStudentDetail: "/level2/StudentDetail/token",
  getAllRegistData: "/level2/RegistData/token",
  getStudentProfileImage: "/level2/StudentImage/token",
  getStudentGPA: "/level2/StudentGPA/token",
  getStudentGrade: "/level2/StudentGrade/token",
};

const localConfig = {
  // GET
  urlPrefix: "http://localhost:1337/local-api",
  getAllStudents: "/students",
  getAllCurriculumStructures: "/curriculum-structures",
  getAllEnrollments: "/enrollments",


  // POST
  postCourse: "/course",
  postEnrollment: "/enrollment"
};

export { psuConfig, localConfig };
