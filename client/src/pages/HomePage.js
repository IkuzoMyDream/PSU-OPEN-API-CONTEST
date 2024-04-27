"use client";

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
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";
import { Bar, Doughnut, Radar } from "react-chartjs-2";
import { Card, Carousel, Progress } from "flowbite-react";
import StatusCarousel from "../components/home-page/status-carousel";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler
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
      const test = await axLOCAL.get(localConfig.getAllStudents);
      console.log(test);

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
      <div className="container mx-auto sm-auto md-auto lg-auto px-20 py-10">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-1">
            {profileImage && <img src={profileImage} />}
            <StudentDetail studentDetail={studentDetail} />
          </div>
          <div className="col-span-3">
            <div className="grid lg:grid-cols-4 md:grid-cols-2  gap-3">
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
            <div className="grid grid-cols-2 gap-3 my-3">
              <Card>
                <h1>หน่วยกิตสะสม</h1>
                <Radar
                  options={{
                    color: "#5FBE97",
                    backgroundColor: "#D2FFEF",
                    borderColor: "#5FBE97",
                    fill: true,
                    scale: {
                      min: 0,
                      max: 100,
                    },
                  }}
                  data={{
                    labels: [
                      "สาระ1",
                      "สาระ2",
                      "สาระ3",
                      "สาระ4",
                      "สาระ5",
                      "สาระ6",
                      "สาระ7",
                      "เลือก",
                      "ชีพพื้นฐาน",
                      "ชีพ",
                      "เสรี",
                    ],
                    datasets: [
                      {
                        label: "my score",
                        data: [80, 70, 15, 20, 25, 30, 35, 69, 48, 38, 90],
                        fill: true,
                      },
                    ],
                  }}
                />
              </Card>
              <Card>
                <h1>คะแนนอิง</h1>
                <Doughnut
                  options={{
                    hover: { mode: null },
                    plugins: { tooltip: { enabled: false } },
                  }}
                  data={{
                    labels: ["my score"],
                    datasets: [
                      {
                        label: "my score",
                        data: [76, 24],
                        backgroundColor: ["#5FBE97", "white"],
                      },
                    ],
                  }}
                />
              </Card>
            </div>
            <div className="grid grid-cols-2 gap-3 my-3">
              <Card>
                <h1>เกรด</h1>
                <Bar
                  data={{
                    labels: ["ปี1 เทอม1", `ปี1 เทอม2`, "ปี2 เทอม1"],
                    datasets: [
                      {
                        label: "my score",
                        data: [3.46, 3.77, 3.75],
                        backgroundColor: "#5FBE97",
                      },
                    ],
                  }}
                />
              </Card>
              <Card>
                <h1>ชั่วโมงกิจกรรม</h1>
                <Bar
                  options={{ indexAxis: "y" }}
                  data={{
                    labels: ["เสริมสร้างสมรรถนะ", `ตามความสนใจ`],
                    datasets: [
                      {
                        label: "my score",
                        data: [28, 50],
                        backgroundColor: ["red", "#5FBE97"],
                      },
                    ],
                  }}
                />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
