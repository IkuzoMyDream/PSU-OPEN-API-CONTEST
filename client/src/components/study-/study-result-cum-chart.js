import { Button, Card } from "flowbite-react";
import { Line } from "react-chartjs-2";

import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";

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

export default function StudyResultCumChart() {
  return (
    <>
      <h5 className="text-3xl font-semibold text-gray-900 dark:text-white">
        กราฟแสดงxxx
      </h5>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-3">
        <div>
          <Card>
            <h1>เกรด</h1>
            <Line
              options={{
                plugins: {
                  legend: { display: false },
                },
                scales: {
                  y: {
                    suggestedMax: 4,
                  },
                },
              }}
              data={{
                labels: [`1/2563`, `2/2563`, `1/2564`],
                datasets: [
                  {
                    label: "GPA",
                    data: [3.97, 3.92, 3.13],
                    backgroundColor: "#5FBE97",
                  },
                ],
              }}
            />
          </Card>
        </div>
        <div>
          <Card style={{ height: "100%" }} className=" text-center">
            <div className="border-b">
              <h5 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                ดัชนีการเปลี่ยนแปลง (%){" "}
              </h5>
              <SentimentDissatisfiedIcon
                className="mb-1"
                style={{ fontSize: "64px", color: "#DE7A6C" }}
              />
              <div className="flex justify-center mb-2">
                <Button className="bg-gradient-to-r from-red-1 to-red-2 size">
                  −20.76%
                </Button>
              </div>
              <p className="mb-1 text-sm text-gray-800">
                ดัชนีการเปลี่ยนแปลงของท่านอยู่ในเกณฑ์ที่ควรปรับปรุง
              </p>
            </div>
            <h5 className="text-2xl font-semibold text-gray-900 dark:text-white">
              สรุปสะสม (Cumulative){" "}
            </h5>
            <div>
              <div className=" grid grid-cols-2">
                <div className=" flex justify-start ml-6 font-light">
                  <p>หน่วยกิตที่ลงทะเบียน</p>
                </div>
                <div className=" flex justify-end mr-6 font-light">
                  <p>85</p>
                </div>
              </div>
              <div className=" grid grid-cols-2">
                <div className=" flex justify-start ml-6">
                  <p className=" font-light">จำนวนหน่วยจุด</p>
                </div>
                <div className=" flex justify-end mr-6 font-light">
                  <p>301.5</p>
                </div>
              </div>
              <div className=" grid grid-cols-2">
                <div className=" flex justify-start ml-6">
                  <p className=" font-bold">ผลการเรียนเฉลี่ย</p>
                </div>
                <div className=" flex justify-end mr-6">
                  <p className=" font-bold">3.54</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
