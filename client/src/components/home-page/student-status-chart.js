import { Card } from "flowbite-react";
import { Bar, Doughnut, Radar } from "react-chartjs-2";

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

export default function StudentStatusChart() {
  const doughnutLabel = {
    id: "doughnutLabel",
    afterDatasetsDraw(chart, args, plugins) {
      const { ctx, data } = chart;

      const centerX = chart.getDatasetMeta(0).data[0].x;
      const centerY = chart.getDatasetMeta(0).data[0].y;

      // text
      ctx.save();
      ctx.font = `bold 90px sans-serit`;
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(`${data.datasets[0].data[0]} %`, centerX, centerY);
    },
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-3 my-3">
        <Card>
          <h1>หน่วยกิตสะสม (%)</h1>
          <Radar
            options={{
              plugins: {
                legend: { display: false },
              },
              scales: {
                r: {
                  min: 0,
                  max: 100,
                },
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
                  data: [80, 70, 45, 65, 50, 46, 35, 69, 48, 38, 90],
                  backgroundColor: "rgb(95,190,151, 0.2)",
                  borderColor: "rgb(95,190,151)",
                  pointBackgroundColor: "rgb(95,190,151)",
                  pointBorderColor: "#fff",
                  pointHoverBackgroundColor: "#fff",
                  pointHoverBorderColor: "rgb(95,190,151)",
                },
              ],
            }}
          />
        </Card>
        <Card>
          <h1>คะแนน PSU-EST</h1>
          <Doughnut
            options={{
              hover: { mode: null },
              plugins: {
                tooltip: { enabled: false },
                legend: { display: false },
              },
              cutout: "70%",
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
            plugins={[doughnutLabel]}
          />
        </Card>
      </div>
      <div className="grid grid-cols-2 gap-3 my-3">
        <Card>
          <h1>เกรด</h1>
          <Bar
            options={{
              plugins: {
                legend: { display: false },
              },
            }}
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
            options={{
              indexAxis: "y",
              plugins: { legend: { display: false } },
            }}
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
    </>
  );
}
