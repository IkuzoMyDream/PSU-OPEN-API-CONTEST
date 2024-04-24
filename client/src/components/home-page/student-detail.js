import { useEffect } from "react";
import { axLOCAL } from "../../utils/config/ax";
import { localConfig } from "../../utils/config/main";

function StudentDetail({ studentDetail }) {
  //   console.log(studentDetail);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const result = await axLOCAL.get(`/student/9910990001`);
        // console.log(result.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDetail();
  }, []);

  return (
    <>
      {studentDetail && (
        <>
          <p>
            {studentDetail.titleNameThai} {studentDetail.studNameThai}{" "}
            {studentDetail.studSnameThai}
          </p>
          <p>{studentDetail.studentId}</p>
          <p>{studentDetail.facNameThai}</p>
          <p>{studentDetail.campusNameThai}</p>
        </>
      )}
    </>
  );
}

export default StudentDetail;
