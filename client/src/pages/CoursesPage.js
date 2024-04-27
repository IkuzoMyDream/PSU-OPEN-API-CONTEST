import { useEffect, useState } from "react";
import { NavBar } from "../components/navbar";
import { axPSU } from "../utils/config/ax";
import { psuConfig } from "../utils/config/main";
import { useAuth } from "react-oidc-context";

function CoursesPage() {
  const auth = useAuth();

  const [studentEnrollment, setStudentEnrollment] = useState([]);
  const fetchStudentEnrollment = async () => {
    try {
      const result = await axPSU.get(psuConfig.getAllRegistData);
      console.log("enrollment =", result.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (auth.isAuthenticated) {
      fetchStudentEnrollment();
    }
  }, [auth, auth.user]);

  return (
    <div>
    </div>
  );
}

export default CoursesPage;
