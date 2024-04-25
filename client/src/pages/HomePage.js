import { useEffect, useState } from "react";
import { useAuth } from "react-oidc-context";
import { useNavigate } from "react-router-dom";
import { localConfig, psuConfig } from "../utils/config/main";
import { NavBar } from "../components/navbar";
import StudentDetail from "../components/home-page/student-detail";
import { axLOCAL, axPSU } from "../utils/config/ax";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

function HomePage() {
  const auth = useAuth();
  const navigate = useNavigate();

  const [studentDetail, setStudentDetail] = useState(null);
  const [profileImage, setProfileImage] = useState(null);

  const handleLogout = () => {
    auth.removeUser();
    navigate("/");
  };

  const fetchStudentProfileImage = async () => {
    try {
      const response = await axPSU.get(psuConfig.getStudentProfileImage);
      setProfileImage(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchStudentDetail = async () => {
    try {
      const result = await axPSU.get(psuConfig.getStudentDetail);

      setStudentDetail(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchStudentEnrollment = async () => {
    try {
      const result = await axPSU.get(psuConfig.getAllRegistData);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCurriculumStructure = async () => {
    try {
      const result = await axLOCAL.get(localConfig.getAllCurriculumStructures);
      // console.log("curriculum structures", result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (auth.isAuthenticated) {
      fetchStudentDetail();
      fetchStudentEnrollment();
      fetchCurriculumStructure();
      fetchStudentProfileImage();
    }
  }, [auth.user, auth]);

  return (
    <>
      <NavBar />
      <div className="container mx-auto sm-auto md-auto lg-auto px-20 py-10">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-1">
            {profileImage && <img src={profileImage} />}
            <StudentDetail studentDetail={studentDetail} />
          </div>
          <div className="col-span-3">
            <div className="grid grid-cols-4 gap-3">
              <div>
                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <div>เกรด</div>
                </div>
              </div>
              <div>
                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <div>คะแนนอิง</div>
                </div>
              </div>
              <div>
                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <div>ชั่วโมงกิจกรรม</div>
                </div>
              </div>
              <div>
                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <div>หน่วยกิตสะสม</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Bar
                  data={{
                    labels: ["เทอม1", `เทอม2`],
                    datasets: [{ label: "my score", data: [5, 10] }],
                  }}
                />
              </div>
              <div>
                <Doughnut
                  data={{
                    labels: ["my score"],
                    datasets: [
                      {
                        label: "my score",
                        data: [76, 24],
                      },
                    ],
                  }}
                  options={{
                    layout: { padding: { bottom: 200 } },
                    rotation: 270,
                    circumference: 180,
                    cutout: "60%",
                    offset: 100,
                    maintainAspectRatio: true,
                    responsive: true,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
