import { Button, Card } from "flowbite-react";
import { Line } from "react-chartjs-2";

import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";

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
                labels: ["ปี1 เทอม1", `ปี1 เทอม2`, `จำลอง1`, `จำลอง2`],
                datasets: [
                  {
                    label: "my score",
                    data: [3.46, 3.77, 4, 3.9],
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
              <SentimentSatisfiedAltIcon
                className="mb-2"
                style={{ fontSize: "64px", color: "#3EA37E" }}
              />
              <div className="flex justify-center mb-2">
                <Button className="bg-gradient-to-r from-green-1 to-green-2 size">
                  +5.71%
                </Button>
              </div>
              <p className="mb-2">ดัชนีการเปลี่ยนแปลงของท่านอยู่ในเกณฑ์ที่ดี</p>
            </div>
            <h5 className="text-2xl font-semibold text-gray-900 dark:text-white">
              สรุปสะสม (Cumulative){" "}
            </h5>
            <p>หน่วยกิตที่ลงทะเบียน 49</p>
            <p>จำนวนหน่วยจุด 177.00</p>
            <p>ผลการเรียนเฉลี่ย 3.61</p>
          </Card>
        </div>
      </div>
    </>
  );
}
