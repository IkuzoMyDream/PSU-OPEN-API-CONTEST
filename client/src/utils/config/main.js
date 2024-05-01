const psuConfig = {
  urlPrefix: "http://localhost:1337/psu-api",
  getStudentDetail: "/level2/StudentDetail/token",
  getAllRegistData: "/level2/RegistData/token",
  getStudentProfileImage: "/level2/StudentImage/token",
  getStudentGPA: "/level2/StudentGPA/token",
  getStudentGrade: "/level2/StudentGrade/token",

  getSubjectOffer: "SubjectOffer",
};

const localConfig = {
  // GET
  urlPrefix: "http://localhost:1337/local-api",
  getAllStudents: "/students",
  getAllCurriculumStructures: "/curriculum-structures",
  getAllEnrollments: "/enrollments",
  getCurriculumStructureByFacDeptMajor: "/curriculum-structure",
  getCurriculumStructureById: "/curriculum-structure",
  getCategories:"/categories",
  getAllcourses:"/courses",
  getEnrollmentByStudId: "/enrollment",

  // POST
  postCourse: "/course",
  postEnrollment: "/enrollment",
  postFaculty: "/faculty",
  postDepartment: "/department",
  postMajor: "/major",
};

export { psuConfig, localConfig };
