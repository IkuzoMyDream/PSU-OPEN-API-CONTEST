import { Card } from "flowbite-react";
import { Bar, Doughnut, Radar } from "react-chartjs-2";

export default function StudentStatusChart() {
  return (
    <>
      <div className="grid grid-cols-2 gap-3 my-3">
        <Card>
          <h1>หน่วยกิตสะสม</h1>
          <Radar
            options={{
              plugins: {
                legend: { display: false },
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
          <h1>คะแนนอิง</h1>
          <Doughnut
            options={{
              hover: { mode: null },
              plugins: {
                tooltip: { enabled: false },
                legend: { display: false },
              },
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
