const psuConfig = {
  urlPrefix: "http://localhost:1337/psu-api",
  getStudentDetail: "/level2/StudentDetail/token",
  getAllRegistData: "/level2/RegistData/token",
  getStudentProfileImage: "level2/StudentImage/token",
};

const localConfig = {
  urlPrefix: "http://localhost:1337/local-api",
  getAllStudents: "/students",
  getAllCurriculumStructures: "/curriculum-structures",
};

export { psuConfig, localConfig };
