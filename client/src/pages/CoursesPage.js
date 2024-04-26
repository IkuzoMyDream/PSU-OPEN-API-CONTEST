import { useEffect, useState } from "react";
import { NavBar } from "../components/navbar";
import { axPSU } from "../utils/config/ax";
import { psuConfig } from "../utils/config/main";

    function CoursesPage() {
        const [studentEnrollment,setStudentEnrollment] = useState([]);
        const fetchStudentEnrollment = async () => {
            try {
              const result = await axPSU.get(psuConfig.getAllRegistData);
                console.log("enrollment =",result.data)
            } catch (err) {
              console.log(err);
            }
          };

          useEffect(() => {
            fetchStudentEnrollment();
          })

          

        return (
            <div>
                <NavBar />
            </div>
        );
    }

    export default CoursesPage;
